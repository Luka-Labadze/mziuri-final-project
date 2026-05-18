import React from "react";
import ponnoLogo from "../assets/logos/10042.webp";
import Shipping from "../assets/icons/10035.png";
import Support from "../assets/icons/10036.png";
import Security from "../assets/icons/10037.png";

function FooterFeatures() {
  return (
    <div className="footerFeatures">
      <div className="logoSection">
        <img src={ponnoLogo} className="ffLogo" />
        <p className="ffLogoParagraph">
          Contrary to popular belief, Lorem Ipsum is not simply random <br />{" "}
          text. It has roots in a piece of classical Latin literature.
        </p>
      </div>
      <div className="supportArea">
        <div className="shippingSection">
          
            <img src={Shipping} className="shippingLogo" />
          <div className="shippingDesc">
            <h6 className="shippingTitle">Free Shipping</h6>
            <span className="borderBottom"></span>
            <p className="shippingParagraph">
              Most product are free <br /> shipping.
            </p>
          </div>
        </div>

        <div className="supportSection">
          
            <img src={Support} className="supportLogo" />
          <div className="supportDesc">
            <h6 className="supportTitle">Customer Support</h6>
            <span className="borderBottom"></span>
            <p className="supportParagraph">24x7 Customer Support</p>
          </div>
        </div>

        <div className="securitySection">
          
            <img src={Security} className="securityLogo" />
          <div className="securityDesc">
            <h6 className="securityTitle">Secure Payment</h6>
            <span className="borderBottom"></span>
            <p className="securityParagraph">
              Most Secure Payment <br /> for customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterFeatures;
