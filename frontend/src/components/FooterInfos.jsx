import React from "react";
import FooterImg1 from "../assets/images/footerImg1.avif";
import FooterImg2 from "../assets/images/footerImg2.avif";
import Phone from "../assets/icons/call.png";
import Email from "../assets/icons/email.png";
import Location from "../assets/icons/location.png";

function FooterInfos() {
  return (
    <div className="footerInfos">
      <ul className="footerInfosWrapper">
        <li className="recentPostsContainer">
          <h3 className="recentPostsTitle">Recent Post</h3>
          <ul className="recentPostsWrapper">
            <li className="rpFirst">
              <img src={FooterImg1} className="rpFirstImg" />
              <div className="rpFirstTextWrapper">
                <h4 className="rpFirstTitle">
                  Temporibus autem <br /> quibusdam
                </h4>
                <p className="rpFirstDate">Sep 02 , 2018</p>
              </div>
            </li>
            <li className="rpSecond">
              <img src={FooterImg2} className="rpSecondImg" />
              <div className="rpSecondTextWrapper">
                <h3 className="rpSecondTitle">
                  Temporibus autem <br /> quibusdam
                </h3>
                <p className="rpSecondDate">Sep 02 , 2018</p>
              </div>
            </li>
          </ul>
        </li>
        <li className="quickLinks">
          <h4 className="quickLinkTitle">Quick Link</h4>
          <ul className="quickLinksCont">
            <li>Cart</li>
            <li>Checkout</li>
            <li>Tracking</li>
            <li>Product</li>
            <li>Blog</li>
          </ul>
        </li>
        <li className="contactInfo">
          <h4 className="contactInfoTitle">Contact Info</h4>
          <ul className="contactInfoWrapper">
            <li className="location">
              <img src={Location} className="locationImg" />
              <p className="locationParagraph">
                lorem address south road <br />
                77 north, USA -9991
              </p>
            </li>
            <li className="mail">
              <img src={Email} className="mailImg" />
              <p className="mailParagraph">
                info@mail.com <br />
                info@mail.com
              </p>
            </li>
            <li className="phone">
              <img src={Phone} className="phoneImg" />
              <p className="phoneParagraph">
                123 456 789 <br />
                123 456 789
              </p>
            </li>
          </ul>
        </li>
        <li className="newsLetter">
          <h4 className="newsLetterTitle">Newsletter</h4>
          <ul className="newsLetterWrapper">
            <li className="newsLetterParagraph">
              <p>
                Sed ut perspiciatis unde omnis iste <br /> natus error sit
                voluptatem accusantium <br /> doloremque laudantium.
              </p>
            </li>
            <li className="newsLetterInpCont">
              <input type="email" placeholder="email@example.com" className="newsLetterInp"/>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default FooterInfos;
