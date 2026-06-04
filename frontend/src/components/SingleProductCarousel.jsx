import "react";
import { Link } from "react-router-dom";
import { useCartModal } from "../context/AddToCartModalContext";

function SingleProductCarousel({ slides }) {
  const { openAddToCartModal } = useCartModal();

  const handleAddToCart = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    openAddToCartModal(productId);
  };

  return (
    <>
      {slides.map((product) => (
        <div key={product._id} className="singleProductCarousel">
          <p className="wishlist">♡</p>
          <div className="imgContainer">
            <Link
              to={`/single-product/${product._id}`}
              style={{ textDecoration: "none" }}
            >
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
            </Link>
          </div>
          <div className="titleAndPriceContainer">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
          <button
            className="shopNow"
            onClick={(e) => handleAddToCart(e, product._id)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </>
  );
}

export default SingleProductCarousel;
