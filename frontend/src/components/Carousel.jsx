import React, { useState } from "react";
import SingleCarousel from "./SingleCarousel";
import prevClick from "../assets/icons/left.png";
import nextClick from "../assets/icons/right.png";

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselBg = "/images/10033.jpg";

  const slides = [
    {
      id: 1,
      img: "/images/10001.png",
      subtitle: "Best Products",
      title: "Mount Carved 2200XD",
    },
    {
      id: 2,
      img: "/images/10002.png",
      subtitle: "Best Products",
      title: "Mount Carved 2200XD",
    },
  ];

  const handleNextClick = () => {
    if (currentImageIndex < slides.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const handlePrevClick = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(slides.length - 1);
    }
  };

  const currentImage = slides[currentImageIndex];

  return (
    <div className="carousel">
      <img src={carouselBg} alt="carouselBgImg" className="carouselBg" />
      <div className="carouselWrapper">
        <button onClick={handlePrevClick} className="carouselPrevClick">
          <span className="carouselBtns">&lt;</span>
        </button>
        
        <div className="singleCarouselContainer">
          <SingleCarousel
            key={currentImage.id}
            title={currentImage.title}
            img={currentImage.img}
            subtitle={currentImage.subtitle}
          />
        </div>
        
        <button onClick={handleNextClick} className="carouselPrevClick">
          <span className="carouselBtns">&gt;</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;