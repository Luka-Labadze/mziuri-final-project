import "react";

function SingleProductPhotoCarousel({ image }) {
  return (
    <div className="singleProductPhotoCarousel">
      <div className="thumbnailBox">
        <img
          src={image}
          alt="ProductthumnailCarouselImage"
          className="photoCarouselImg"
        />
      </div>
    </div>
  );
}

export default SingleProductPhotoCarousel;
