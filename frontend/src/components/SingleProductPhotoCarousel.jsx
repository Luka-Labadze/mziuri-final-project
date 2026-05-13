import React from 'react';

function SingleProductPhotoCarousel({ slides }) {
  return (
    <div className='singleProductPhotoCarousel'>
      <div className="thumbnailBox">
        <img src={slides.image1} alt="product thumbnail" className="photoCarouselImg" />
      </div>
    </div>
  );
}

export default SingleProductPhotoCarousel;