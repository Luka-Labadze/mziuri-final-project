import "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as api from "../api/api";
import { useTranslation } from "react-i18next";

function ResetPassword() {
  const { t } = useTranslation();

  const [state, setState] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const { token } = useParams();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await api.resetPasswordUser(
        { password: state.password, confirm_password: state.confirmPassword },
        token,
      );
      alert(response.msg || "Password updated successfully!");
    } catch (err) {
      console.error(err);
      alert(err.message || "Reset failed");
    }
  };

  const validate = () => {
    const errors = {};

    if (!state.password) {
      errors.password = "password field is required";
    } else if (state.password.length < 8) {
      errors.password = "password must be at least 8 characters long";
    } else if (!/\d/.test(state.password)) {
      errors.password = "password must contain at least one number";
    } else if (!/[A-Z]/.test(state.password)) {
      errors.password = "password must contain at least one uppercase letter";
    }

    if (!state.confirmPassword) {
      errors.confirmPassword = "confirm password field is required";
    } else if (state.password !== state.confirmPassword) {
      errors.confirmPassword = "passwords do not match";
    }

    return errors;
  };

  return (
    <div className="resetPassword">
      <form onSubmit={handleSubmit} className="rpForm">
        <div className="rpTextContainer">
          <h2 className="rpTitle">
            {t("Reset-password")}
          </h2>

          <p>
            {t("Reset-password-subtitle")}
          </p>
        </div>

        <div className="resetPasswordForm">
          <input
            type="password"
            placeholder={t("Enter-password")}
            name="password"
            className="rpInputs"
            value={state.password}
            onChange={handleChange}
            id={errors.password ? "error" : ""}
            autoComplete="new-password"
          />
          <p className="rpError">{errors.password}</p>

          <input
            type="password"
            placeholder={t("Confirm-password")}
            name="confirmPassword"
            className="rpInputs"
            value={state.confirmPassword}
            onChange={handleChange}
            id={errors.confirmPassword ? "error" : ""}
            autoComplete="new-password"
          />
          <p className="rpError">{errors.confirmPassword}</p>

          <div className="upperBtns">
            <button className="rpBtn" type="submit">
              {t("Reset-password-btn")}
            </button>

            <Link to="/register" className="toRegisterContainer">
              <p className="toRegister">
                {t("Create-account")}
              </p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;