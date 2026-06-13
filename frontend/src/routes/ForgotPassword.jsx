import { useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../api/api";
import { useTranslation } from "react-i18next";

function ForgotPassword() {
  const { t } = useTranslation();

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
      alert(response.msg || "Email has been sent");
    } catch (err) {
      console.error("Forgot password error:", err);
      alert(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="forgotPasswordContainer">
      <form className="fpForm" onSubmit={handleSubmit}>
        <div className="fPTextSection">
          <h5 className="forgotPasswordTitle">
            {t("Reset-password")}
          </h5>

          <p className="forgotPasswordParagraph">
            {t("Reset-password-subtitle")}
          </p>
        </div>

        <div className="fpInputFormSection">
          <input
            name="email"
            type="email"
            placeholder={t("Email")}
            className="forgotPasswordInput"
            value={state.email}
            autoComplete="email"
            onChange={handleChange}
          />

          <p className="forgotPasswordError">{errors.email}</p>

          <br />

          <div className="fpInputBtns">
            <button type="submit" className="fpSubmit">
              {t("Submit")}
            </button>

            <Link to="/login" style={{ textDecoration: "none" }}>
              <p className="fpCancel">{t("Cancel")}</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;