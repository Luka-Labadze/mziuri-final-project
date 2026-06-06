import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";
import { useUserData } from "../context/UserContext";
import * as api from "../api/api";
function Login() {
  const { login } = useUserData();
  const { useFakeLoader } = useLoader();
  useEffect(() => useFakeLoader(), []);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const response = await api.loginUser(formData);

        if (response?.data) {
          login(response.data);
          navigate("/products");
        } else {
          alert(response?.err || "Login failed");
        }
      } catch (err) {
        console.error("Submission error:", err);
      }
    }
  };

  const validate = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = "email field is required";
    } else if (!formData.email.includes("@")) {
      errors.email = "email should contain @ symbol";
    }

    if (!formData.password) {
      errors.password = "password field is required";
    }

    return errors;
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="textContainer">
          <h2 className="loginTitle">Login</h2>
          <p className="loginSubtitle">
            Please login using account detail bellow.
          </p>
        </div>
        <div className="loginForm">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="loginInputs"
            value={formData.email}
            onChange={handleChange}
            id={`${errors.email ? "error" : ""}`}
            autoComplete="email"
          />
          <p className="loginError">{errors.email}</p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="loginInputs"
            value={formData.password}
            onChange={handleChange}
            id={`${errors.password ? "error" : ""}`}
            autoComplete="current-password"
          />
          <p className="loginError">{errors.password}</p>
          <div className="upperBtns">
            <button className="loginBtn" type="submit">
              Sign In
            </button>
            <p className="forgotPassword">Forgot your password?</p>
          </div>
          <Link to="/register" className="toRegisterContainer">
            <p className="toRegister">Create account</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
