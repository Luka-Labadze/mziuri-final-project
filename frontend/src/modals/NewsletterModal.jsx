import "react";
import NewsletterBg from "../assets/staticImages/10032.jpg";
import Modal from "../components/Modal";
import CloseImage from "../assets/icons/X.svg";
import { useTranslation } from "react-i18next";

function NewsletterModal({ isOpen, onClose }) {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="centered">
      <div className="newsletterModal">
        <button className="closeBtn" onClick={onClose} aria-label="Close">
          <img src={CloseImage} alt="CloseBtn" />
        </button>

        <div className="newsletterBgCont">
          <img src={NewsletterBg} alt="newsletterBg" className="newsletterBg" />
        </div>

        <div className="subscribeArea">
          <div className="TitleAndParagraphContainer">
            <h2 className="TAPTitle">{t("Newsletter")}</h2>

            <p className="TAPParagraph">{t("Newsletter-text")}</p>
          </div>

          <div className="newsletterInput">
            <input
              type="email"
              placeholder={t("Email-placeholder")}
              className="newsletterEmailInput"
            />
          </div>

          <div className="subsBtn">
            <button className="subscribe" type="submit">
              {t("Subscribe")}
            </button>
          </div>

          <div className="newsletterCheckboxContainer">
            <input type="checkbox" id="newsletterCheckbox" />

            <label htmlFor="newsletterCheckbox" className="dontShowThisAgain">
              {t("Dont-show-again")}
            </label>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default NewsletterModal;
