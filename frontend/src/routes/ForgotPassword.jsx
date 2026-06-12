import { useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../api/api";

function ForgotPassword() {
  const [state, setState] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!state.email) {
      errors.email = "email field is required";
    } else if (!state.email.includes("@")) {
      errors.email = "email should contain @ symbol";
    }
    return errors;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({ email: "" });

  try {
    const response = await api.forgotPasswordUser(state);
    // response is now response.data directly (the { msg: "..." } object)
    alert(response.msg || "Email has been sent");
  } catch (err) {
    console.error("Forgot password error:", err);
    alert(err.message || "Something went wrong. Please try again.");
  }
}
  return (
    <div className="forgotPasswordContainer">
      <form className="fpForm" onSubmit={handleSubmit}>
        <div className="fPTextSection">
          <h5 className="forgotPasswordTitle">Reset Your Password</h5>
          <p className="forgotPasswordParagraph">
            We will send you an email to reset your password.
          </p>
        </div>
        <div className="fpInputFormSection">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="forgotPasswordInput"
            value={state.email}
            autoComplete="email"
            onChange={handleChange}
          />
          <p className="forgotPasswordError">{errors.email}</p>
          <br />
          <div className="fpInputBtns">
            <button type="submit" className="fpSubmit">
              Submit
            </button>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <p className="fpCancel">Cancel</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
