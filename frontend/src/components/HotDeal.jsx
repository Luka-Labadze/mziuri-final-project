import React, { useState } from "react";
import hotDealHeadset from "../assets/images/10003.png";
import hotDealBG from "../assets/images/10032.jpg";
import Headset from "../assets/images/10004.png";
import VRHeadset from "../assets/images/10005.png";
import SmartWatch from "../assets/images/10006.png";
import Microphone from "../assets/images/10009.png";
import Camera from "../assets/images/10010.png";
import HeadsetHolder from "../assets/images/10012.png";
import MicrophoneFilther from "../assets/images/10016.png";
import Speakers from "../assets/images/10030.png";
import HotDealCarousel from "./HotDealCarousel";

function HotDeal() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image1: Headset,
      image2: VRHeadset,
      title: "Demo Product Title",
      price: 349.99,
    },
    {
      id: 2,
      image1: SmartWatch,
      image2: Camera,
      title: "Demo Product Title",
      price: 525.0,
    },
    {
      id: 3,
      image1: Microphone,
      image2: MicrophoneFilther,
      title: "Demo Product Title",
      price: 145.5,
    },
    {
      id: 4,
      image1: HeadsetHolder,
      image2: Speakers,
      title: "Demo Product Title",
      price: 89.95,
    },
  ];
  const handleNextClick = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setCurrentSlideIndex(0);
    }
  };

  const handlePrevClick = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      setCurrentSlideIndex(slides.length - 1);
    }
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="hotDeal">
      <div className="hDLeftSide">
        <img src={hotDealBG} className="hdBgImg" alt="Background" />

        <div className="hDContent">
          <div className="textContainer">
            <h6 className="hot-deal">Hot Deal</h6>
            <h1 className="hdLeftSideTitle">Kemioo DX24 Headphone</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply <br />{" "}
              random text. It has roots in a piece of classical Latin <br />{" "}
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
              src={hotDealHeadset}
              className="hotDealHeadset"
              alt="Headset"
            />
          </div>
        </div>
      </div>

      <div className="hdCarousel">
        <div className="hdCarouselWrapper">
          <HotDealCarousel
            data={currentSlide}
            onPrev={handlePrevClick}
            onNext={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
}

export default HotDeal;
