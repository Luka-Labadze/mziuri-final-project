import React from "react";
import HotDealCarousel from "./HotDealCarousel";
import HotDealBg from '../assets/staticImages/10032.jpg'
import HotDealHeadset from '../assets/staticImages/10003.png'
function HotDeal({ products }) {
  return (
    <div className="hotDeal">
      <div className="hDLeftSide">
        <img src={HotDealBg} className="hdBgImg" alt="Background" />

        <div className="hDContent">
          <div className="textContainer">
            <h6 className="hot-deal">Hot Deal</h6>
            <h1 className="hdLeftSideTitle">Kemioo DX24 Headphone</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply <br />
              random text. It has roots in a piece of classical Latin <br />
              literature
            </p>

            <div className="hotDealExpireDate">
              <ul className="expiration">
                <ol>00</ol>
                <ol>00</ol>
                <ol>00</ol>
                <ol>00</ol>
              </ul>
              <ul className="timespan">
                <ol>Days</ol>
                <ol>Hrs</ol>
                <ol>Min</ol>
                <ol>Secs</ol>
              </ul>
            </div>
          </div>

          <div className="imgContainer">
            <img
              src={HotDealHeadset}
              className="hotDealHeadset"
              alt="Headset"
            />
          </div>
        </div>
      </div>

      <div className="hdCarousel">
        <div className="hdCarouselWrapper">
          <div className="carouselContainer">
            <HotDealCarousel slides={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotDeal;