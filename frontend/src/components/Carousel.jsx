import  { useState } from 'react';
import SingleCarousel from './SingleCarousel';
import CarouselsFirstImage from '../assets/staticImages/10001.png';
import CarouselsSecondImage from '../assets/staticImages/10002.png';
import CarouselBg from '../assets/staticImages/10033.jpg';
function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slides = [
    {
      id: 1,
      img: CarouselsFirstImage,
      subtitle: 'Best Products',
      title: 'Mount Carved 2200XD',
    },
    {
      id: 2,
      img: CarouselsSecondImage,
      subtitle: 'Best Products',
      title: 'Mount Carved 2200XD',
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
      <img
        src={CarouselBg}
        alt="carouselBgImg"
        className="carouselBg"
      />
      <div className="carouselWrapper">
        <button
          onClick={handlePrevClick}
          className="carouselPrevClick"
        >
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

        <button
          onClick={handleNextClick}
          className="carouselPrevClick"
        >
          <span className="carouselBtns">&gt;</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
