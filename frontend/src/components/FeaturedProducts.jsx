import React, { useState } from "react";
import SingleProductCarousel from "./SingleProductCarousel";

function FeaturedProducts({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const ITEMS_VISIBLE = 4;

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
      setCurrentSlideIndex(currentSlideIndex);
    }
  };

  return (
    <div className="featuredProducts">
      <div className="featuredProductsNavCont">
        <ul className="featuredProductsNav">
          <span className="featuredProductsNavBorder">
            <li className="navItem active">New Product</li>
            <li className="navItem">Featured</li>
            <li className="navItem">Best Deal</li>
          </span>
        </ul>
      </div>

      <div className="featuredProductsCarousel">
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
              transition: "transform 1.7s ease",
            }}
          >
            {slides.map((product, index) => (
              <div key={index} className="product-slide">
                <SingleProductCarousel slides={product.slides || [product]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
