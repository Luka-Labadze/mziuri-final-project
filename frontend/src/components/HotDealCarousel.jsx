import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartModal } from '../context/AddToCartModalContext';
function HotDealCarousel({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { openAddToCartModal } = useCartModal();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const currentProductId = slides[currentSlideIndex]?._id;
    if (currentProductId) {
      openAddToCartModal(currentProductId);
    }
  };
  const handleNextClick = () => {
    if (currentSlideIndex < (slides?.length || 0) - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setCurrentSlideIndex(0);
    }
  };

  const handlePrevClick = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      setCurrentSlideIndex((slides?.length || 1) - 1);
    }
  };

  return (
    <div className="hotDealCarousel">
      <button
        className="carouselBtn prev"
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <button
        className="carouselBtn next"
        onClick={handleNextClick}
      >
        &gt;
      </button>

      <p className="wishlist">♡</p>

      <div className="imgContainer">
        <img
          alt="IMAGE"
          src={slides[currentSlideIndex]?.image1}
          className="hdCarouselImg"
          id="image1"
        />
        <img
          alt="IMAGE2"
          src={slides[currentSlideIndex]?.image2}
          className="hdCarouselImg"
          id="image2"
        />
      </div>

      <div className="titleAndPriceContainer">
        <h3>{slides[currentSlideIndex]?.title || ''}</h3>
        <p>${slides[currentSlideIndex]?.price || '0.00'}</p>
      </div>
      <Link
        to="/products"
        style={{ textDecoration: 'none' }}
      >
        <button
          className="shopNow"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </Link>
    </div>
  );
}

export default HotDealCarousel;
