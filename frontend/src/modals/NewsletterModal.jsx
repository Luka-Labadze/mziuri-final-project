import "react";
import NewsletterBg from "../assets/staticImages/10032.jpg";
import Modal from "../components/Modal";
function NewsletterModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="newsletterModal">
        <div className="newsletterBgCont">
          <img src={NewsletterBg} alt="newsletterBg" className="newsletterBg" />
        </div>
        <div className="subscribeArea">
          <div className="TitleAndParagraphContainer">
            <h2 className="TAPTitle">NEWSLETTER</h2>
            <p className="TAPParagraph">
              Join over 1,000 people who get free and fresh content delivered{" "}
              <br /> automatically each time we publish
            </p>
          </div>
          <div className="newsletterInput">
            <input
              type="email"
              placeholder="email@example.com"
              className="newsletterEmailInput"
            />
          </div>
          <div className="subsBtn">
            <button className="subscribe" type="submit">
              SUBSCRIBE
            </button>
          </div>
          <div className="newsletterCheckboxContainer">
            <input type="checkbox" name="" id="newsletterCheckbox" />
            <label htmlFor="newsletterCheckbox" className="dontShowThisAgain">
              Don't show this again
            </label>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default NewsletterModal;
