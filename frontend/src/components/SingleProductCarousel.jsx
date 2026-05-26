import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/products" style={{textDecoration: "none"}}>
          <button className="shopNow" >Shop Now</button>
          </Link>
        </div>
      ))}
    </>
  );
}

export default SingleProductCarousel;
