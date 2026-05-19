import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";
function Register() {
  const { useFakeLoader } = useLoader();
  useEffect(() => useFakeLoader(), []);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate("/products");
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
    } else if (formData.password.length < 8) {
      errors.password = "password must contain more than 8 digits";
    } else if (!/\d/.test(formData.password)) {
      errors.password = "password must contain numbers";
    } else if (!/[A-Z]/.test(formData.password)) {
      errors.password = "password must contain at least one uppercase letter";
    }

    if (!formData.firstname) {
      errors.firstname = "firstname field is required";
    } else if (formData.firstname.length < 4) {
      errors.firstname = "firstname must be at least 4 characters long";
    } else if (formData.firstname.length > 20) {
      errors.firstname = "firstname must be less than 20 characters long";
    } else if (formData.firstname.includes(" ")) {
      errors.firstname = "firstname must not contain spaces";
    } else if (!/^[a-zA-Z]+$/.test(formData.firstname)) {
      errors.firstname = "firstname must contain only letters";
    } else if (!/[a-zA-Z]/.test(formData.firstname)) {
      errors.firstname = "firstname must contain at least one letter";
    }

    if (!formData.lastname) {
      errors.lastname = "lastname field is required";
    } else if (formData.lastname.length < 4) {
      errors.lastname = "lastname must be at least 4 characters long";
    } else if (formData.lastname.length > 20) {
      errors.lastname = "lastname must be less than 20 characters long";
    } else if (formData.lastname.includes(" ")) {
      errors.lastname = "lastname must not contain spaces";
    } else if (!/^[a-zA-Z]+$/.test(formData.lastname)) {
      errors.lastname = "lastname must contain only letters and digits";
    } else if (!/[a-zA-Z]/.test(formData.lastname)) {
      errors.lastname = "lastname must contain at least one letter";
    }

    return errors;
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="textSideForm">
          <h2 className="registerTitle">Create Account</h2>
          <p className="registerSubtitle">
            Please Register using account detail bellow.
          </p>
        </div>
        <div className="inputForm">
          <input
            type="text"
            placeholder="First Name"
            className="formInputs"
            value={formData.firstname}
            onChange={handleChange}
            id={`${errors.firstname ? "error" : ""}`}
            name="firstname"
          />
          <p className="registerError">{errors.firstname}</p>
          <input
            type="text"
            placeholder="Last Name"
            className="formInputs"
            value={formData.lastname}
            onChange={handleChange}
            id={`${errors.lastname ? "error" : ""}`}
            name="lastname"
          />
          <p className="registerError">{errors.lastname}</p>
          <input
            type="email"
            placeholder="Email"
            className="formInputs"
            value={formData.email}
            onChange={handleChange}
            id={`${errors.email ? "error" : ""}`}
            name="email"
          />
          <p className="registerError">{errors.email}</p>
          <input
            type="password"
            placeholder="Password"
            className="formInputs"
            value={formData.password}
            onChange={handleChange}
            id={`${errors.password ? "error" : ""}`}
            name="password"
          />
          <p className="registerError">{errors.password}</p>
        </div>
        <div className="bottomSideForm">
          <button className="registerBtn" type="submit">
            Create
          </button>
          <Link to="/" className="returnToStore">
            Return To Store
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
