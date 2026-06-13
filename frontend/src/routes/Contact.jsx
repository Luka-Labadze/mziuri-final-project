import { useEffect, useState } from "react";
import { useLoader } from "../context/LoaderContext";
import { useNotification } from "../context/NotificationContext";
import { contact } from "../api/api";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  const { useFakeLoader } = useLoader();

  useEffect(() => useFakeLoader(), []);

  const [errors, setErrors] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const { showNotification } = useNotification();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      try {
        await contact(formData);
        showNotification("Message sent successfully!");
        setFormData({ name: "", subject: "", email: "", message: "" });
        setErrors({ name: "", subject: "", email: "", message: "" });
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        showNotification("Failed to send message.");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = "Email field is required";
    } else if (!formData.email.includes("@")) {
      errors.email = "Email should contain @ symbol";
    }

    if (!formData.name) {
      errors.name = "Name field is required";
    } else if (formData.name.length < 4) {
      errors.name = "Name must be at least 4 characters long";
    } else if (formData.name.length > 20) {
      errors.name = "Name must be less than 20 characters long";
    } else if (!/^[a-zA-Z]+$/.test(formData.name)) {
      errors.name = "Name must contain only letters (no spaces)";
    }

    if (!formData.subject) {
      errors.subject = "Subject field is required";
    } else if (formData.subject.length < 4) {
      errors.subject = "Subject must be at least 4 characters long";
    } else if (formData.subject.length > 90) {
      errors.subject = "Subject must be less than 90 characters long";
    } else if (!/^[a-zA-Z0-9 ]+$/.test(formData.subject)) {
      errors.subject = "Subject must contain only letters and digits";
    } else if (!/[a-zA-Z]/.test(formData.subject)) {
      errors.subject = "Subject must contain at least one letter";
    }

    if (!formData.message) {
      errors.message = "Message field is required";
    } else if (formData.message.length < 4) {
      errors.message = "Message must be at least 4 characters long";
    } else if (formData.message.length > 250) {
      errors.message = "Message must be less than 250 characters long";
    } else if (!/^[\w\s.,!?'"()-]+$/i.test(formData.message)) {
      errors.message = "Message contains invalid characters";
    }

    return errors;
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <div className="contactInputSection">
          <ul className="contactInputWrapper">
            <h4 className="contactTitle">{t("Contact-us")}</h4>

            <li className="nameAndEmailWrapper">
              <div className="nameAndErr">
                <input
                  type="text"
                  name="name"
                  placeholder={t("Name")}
                  className="nameAndEmail"
                  value={formData.name}
                  onChange={handleChange}
                  id={errors.name ? "error" : ""}
                />
                <p className="contactValidationError">{errors.name}</p>
              </div>

              <div className="emailAndErr">
                <input
                  type="email"
                  name="email"
                  placeholder={t("Email")}
                  className="nameAndEmail"
                  value={formData.email}
                  onChange={handleChange}
                  id={errors.email ? "error" : ""}
                />
                <p className="contactValidationError">{errors.email}</p>
              </div>
            </li>

            <li>
              <input
                type="text"
                name="subject"
                placeholder={t("Subject")}
                className="contactInpSubject"
                value={formData.subject}
                onChange={handleChange}
                id={errors.subject ? "error" : ""}
              />
              <p className="contactValidationError">{errors.subject}</p>
            </li>

            <li>
              <textarea
                placeholder={t("Message")}
                name="message"
                className="contactInpMessage"
                value={formData.message}
                onChange={handleChange}
                id={errors.message ? "error" : ""}
              />
              <p className="contactValidationError">{errors.message}</p>
            </li>

            <li>
              <button className="contactSubmit" type="submit">
                {t("Submit")}
              </button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Contact;
