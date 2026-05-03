import React from "react";

function HotDealCarousel({ data, onPrev, onNext }) {
  return (
    <div className="hotDealCarousel">
      <button className="carouselBtn prev" onClick={onPrev}>
        &lt;
      </button>
      <button className="carouselBtn next" onClick={onNext}>
        &gt;
      </button>

      <p className="wishlist">♡</p>

      <div className="imgContainer">
        <img
          alt="IMAGE"
          src={data.image1}
          className="hdCarouselImg"
          id="image1"
        />
        <img
          alt="IMAGE2"
          src={data.image2}
          className="hdCarouselImg"
          id="image2"
        />
      </div>

      <div className="titleAndPriceContainer">
        <h3>{data.title}</h3>
        <p>${data.price}</p>
      </div>

      <button className="shopNow">Shop Now</button>
    </div>
  );
}

export default HotDealCarousel;
