import { sendContactMail } from "../utils/mailSender.js";

export const contact = async (req, res) => {
  console.log("Request received, checking DB connection...");
  try {
    const { email, subject, message } = req.body;

    // 1. Basic Server-Side Validation
    if (!email || !subject || !message) {
      return res.status(400).json({ err: "All fields are required" });
    }
    
    // Optional: Add regex validation for email here as well

    // 2. Attempt to send mail
    await sendContactMail(email, subject, message);
    
    return res.status(200).json({ data: "Email has been sent!" });
  } catch (err) {
    console.error("Contact Controller Error:", err);
    return res.status(500).json({ err: "Failed to send email. Please try again later." });
  }
};