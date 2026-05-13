import React, { useState } from "react";
import HotDealCarousel from "./HotDealCarousel";
import Headset from "../assets/images/10004.png";
import VRHeadset from "../assets/images/10005.png";
import SmartWatch from "../assets/images/10006.png";
import Microphone from "../assets/images/10009.png";
import Camera from "../assets/images/10010.png";
import HeadsetHolder from "../assets/images/10012.png";
import MicrophoneFilther from "../assets/images/10016.png";
import Speakers from "../assets/images/10030.png";
import SingleProductCarousel from "./SingleProductCarousel";
import SingleProductPhotoCarousel from "./SingleProductPhotoCarousel";

function SingleProductPage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const ITEMS_VISIBLE = 3;

  const handleNextClick = () => {
    if (currentSlideIndex < slides.length - ITEMS_VISIBLE) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setCurrentSlideIndex(0);
    }
  };

  const handlePrevClick = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      setCurrentSlideIndex(slides.length - ITEMS_VISIBLE);
    }
  };

   const handlePhotoNextClick = () => {
    if (currentSlideIndex < slides.length - ITEMS_VISIBLE) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setCurrentSlideIndex(0);
    }
  };

  const handlePhotoPrevClick = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      setCurrentSlideIndex(slides.length - ITEMS_VISIBLE);
    }
  };

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
    {
      id: 5,
      image1: Headset,
      image2: VRHeadset,
      title: "Demo Product Title",
      price: 349.99,
    },
    {
      id: 6,
      image1: SmartWatch,
      image2: Camera,
      title: "Demo Product Title",
      price: 525.0,
    },
    {
      id: 7,
      image1: Microphone,
      image2: MicrophoneFilther,
      title: "Demo Product Title",
      price: 145.5,
    },
    {
      id: 8,
      image1: HeadsetHolder,
      image2: Speakers,
      title: "Demo Product Title",
      price: 89.95,
    },
    {
      id: 9,
      image1: Headset,
      image2: VRHeadset,
      title: "Demo Product Title",
      price: 349.99,
    },
    {
      id: 10,
      image1: SmartWatch,
      image2: Camera,
      title: "Demo Product Title",
      price: 525.0,
    },
    {
      id: 11,
      image1: Microphone,
      image2: MicrophoneFilther,
      title: "Demo Product Title",
      price: 145.5,
    },
    {
      id: 12,
      image1: HeadsetHolder,
      image2: Speakers,
      title: "Demo Product Title",
      price: 89.95,
    },
  ];

  return (
    <div className="singleProductPage">
      <div className="thumbnail">
        <div className="mainImg">
          <img src={Camera} alt="mainImg" className="thumbnailMainImg" />
        </div>
        <div className="thumbnailCarousel">
          <button className="photoCarouselBtn prev" onClick={handlePhotoPrevClick}>
            &lt;
          </button>
          <button className="photoCarouselBtn next" onClick={handlePhotoNextClick}>
            &gt;
          </button>
          <div className="thumbnailCarouselWrapper">
            <div
              className="carouselContainer"
              style={{
                transform: `translateX(-${currentSlideIndex * (100 / 3)}%)`,
                display: "flex",
                transition: "transform 0.3s ease",
              }}
            >
              {slides.map((slide) => (
                <SingleProductPhotoCarousel key={slide.id} slides={slide} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="productDescription">
        <span className="type">{"hatil"}</span>
        <h3 className="productTitle">{"Accusantium doloremque"}</h3>
        <div className="priceContainer">
          <span className="newPrice">{"$130.00"}</span>
          <span className="oldPrice">{"$150.00"}</span>
          <p className="discount">Save -13%</p>
        </div>
        <p className="priceRatio">{"$130 / 2g"}</p>
        <p className="productCaption">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered <br />
          alteration in some form, by injected humour, or randomised words which
          don't look even slightly <br />
          believable.
        </p>
        <div className="size">
          <h4 className="sizeTitle">Size :</h4>
          <ul className="sizeList">
            <li>Xl</li>
            <li>Ml</li>
            <li>Xs</li>
            <li>X</li>
            <li>L</li>
            <li>M</li>
          </ul>
        </div>
        <div className="color">
          <p className="colorTitle">Color :</p>
          <ol className="colorList">
            <li>🟨</li>
            <li>⬛</li>
            <li>🟫</li>
            <li>🟥</li>
            <li>🟩</li>
          </ol>
        </div>
        <div className="material">
          <p className="materialTitle">Material :</p>
          <ol className="materialList">
            <li>Partex</li>
            <li>Wood</li>
            <li>Glass</li>
          </ol>
        </div>
        <div className="quantityAndAddToCart">
          <ol className="quantityList">
            <li>
              <p className="quantityTitle">Quantity:</p>
            </li>
            <li>
              <input type="number" defaultValue={1} className="quantityInput" />
            </li>
            <li>
              <button className="addToCart">ADD TO CART</button>
            </li>
            <li>
              <p className="wishlist">♡</p>
            </li>
          </ol>
        </div>
        <div className="buyNow">
          <button className="buyNowBtn">BUY IT NOW</button>
        </div>
        <div className="tag">
          <p className="tagTitle">Tag :</p>
          <ol className="tagList">
            <li>black,</li>
            <li>brown,</li>
            <li>cyan</li>
          </ol>
        </div>
        <div className="share">
          <p className="shareTitle">Share :</p>
          <ol className="shareList">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Google + </li>
            <li>Pintereset</li>
          </ol>
        </div>
        <div className="checkout">
          <p>Guaranteed safe checkout</p>
        </div>

        <div className="singleProductPageCarousel">
          <button className="carouselBtn prev" onClick={handlePrevClick}>
            &lt;
          </button>
          <button className="carouselBtn next" onClick={handleNextClick}>
            &gt;
          </button>
          <div className="carouselWrapper">
            <div
              className="carouselContainer"
              style={{
                transform: `translateX(-${currentSlideIndex * 308}px)`,
                transition: "transform 0.3s ease",
              }}
            >
              {slides.map((slide) => (
                <SingleProductCarousel key={slide.id} slides={slide} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
