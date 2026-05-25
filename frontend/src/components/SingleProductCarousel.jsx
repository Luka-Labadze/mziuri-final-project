import React from "react";

function SingleProductCarousel({ slides }) {
  return (
    <>
      {slides.map((product) => (
        <div key={product._id} className="singleProductCarousel">
          <p className="wishlist">♡</p>
          <div className="imgContainer">
            <img
              alt="IMAGE"
              src={product.image1}
              className="hdCarouselImg"
              id="image1"
            />
            <img
              alt="IMAGE2"
              src={product.image2}
              className="hdCarouselImg"
              id="image2"
            />
          </div>
          <div className="titleAndPriceContainer">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
          <button className="shopNow">Shop Now</button>
        </div>
      ))}
    </>
  );
}

export default SingleProductCarousel;
