import React from "react";
import { Link } from 'react-router-dom';
function SingleCarousel({ title, img, subtitle }) {
  return (
    <div className="singleCarousel carousel-slide animated fadeIn active slide-visible">
      <div className="imgContainer">
        <img src={img} className="carouselImg" alt="product" />
      </div>
      <div className="textContainer">
        <h6>{subtitle}</h6>
        <h1 className="carouselTitle">{title}</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It{" "}
          <br /> has roots in a piece of classical Latin literature.
        </p>
        <Link to="/shop">
        <button className="carouselShopBtn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default SingleCarousel;
