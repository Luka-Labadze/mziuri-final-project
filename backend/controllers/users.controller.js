import Users from "../models/users.models.js";
import { sendContactMail, sendResetPasswordMail } from "../utils/mailSender.js";
import { hashPassword, comparePassword } from "../utils/bcrypt.js";
import jwt from "jsonwebtoken";

export const contact = async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    if (!email || !subject || !message) {
      return res.status(400).json({ err: "All fields are required" });
    }

    await sendContactMail(email, subject, message);

    return res.status(200).json({ data: "Email has been sent!" });
  } catch (err) {
    console.error("Contact Controller Error:", err);
    return res
      .status(500)
      .json({ err: "Failed to send email. Please try again later." });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const hashedPassword = await hashPassword(password);

    const newUser = new Users({
      firstname: firstname,
      email: email,
      lastname: lastname,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    const userObj = newUser.toObject();
    delete userObj.password;

    return res.status(201).json({ data: userObj });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "Something went wrong" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ err: "Invalid email or password" });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ err: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    const userObj = user.toObject();
    delete userObj.password;

    return res.status(200).json({ data: userObj });
  } catch (err) {
    return res.status(500).json({ err: "Something went wrong" });
  }
};

export const logoutUser = (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ data: "User has logged out" });
  } catch (err) {
    return res.status(500).json({ err: "Something went wrong" });
  }
};

export const getToken = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json({ err: "Please login now!" });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return res.status(400).json({ msg: "Please login now!" });
      return res.status(200).json({ data: token });
    });
  } catch (err) {
    return res.status(500).json({ err: "Something went wrong" });
  }
};

export const getUser = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ err: "jwt must be provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); 
    
    const user = await Users.findById(decoded.id).select("-password"); 

    if (!user) return res.status(404).json({ err: "User not found" });

    res.status(200).json({ data: user });
  } catch (err) {
    console.error("Auth Error:", err);
    res.status(401).json({ err: "Invalid or expired token" });
  }
};





export const forgotPasswordUser = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ err: "Email is required" });
  }

  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ err: "No user found with that email" });
    }

    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });
    const resetUrl = `http://localhost:5173/reset-password/${resetToken}`;

    await sendResetPasswordMail(email, resetUrl);

    return res.status(200).json({ data: "Email has been sent!" });
  } catch (err) {
    console.error("Forgot Password Error:", err);
    return res.status(500).json({ err: "Internal server error" });
  }
};

export const resetPasswordUser = async (req, res) => {
    try {
        const { password } = req.body;
        const token = req.header('Authorization');

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const hashedPassword = await hashPassword(password);

        await Users.findOneAndUpdate({ _id: decoded.id }, { password: hashedPassword });

        res.status(200).json({ msg: "Password successfully changed!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Failed to reset password" });
    }
};