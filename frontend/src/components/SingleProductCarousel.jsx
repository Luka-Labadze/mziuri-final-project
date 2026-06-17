import "react";
import { Link } from "react-router-dom";
import { useCartModal } from "../context/AddToCartModalContext";
import { useTranslation } from "react-i18next";
import { useWishlistModal } from "../context/AddToWishlistModalContext";
import { useCartWishlist } from "../context/CartWishlistContext";

function SingleProductCarousel({ slides }) {
  const { openAddToCartModal } = useCartModal();
  const { t } = useTranslation();
  const { openAddToWishlistModal } = useWishlistModal();
      const { addToCart, addToWishlist } = useCartWishlist();
  
const handleAddToCart = (e, product) => {
  e.preventDefault();
  e.stopPropagation();
  if (!product) return;
  addToCart({ _id: product._id, title: product.title, price: product.price, image1: product.image1, image2: product.image2 });
  openAddToCartModal(product._id);
};

const handleAddToWishlist = (e, product) => {
  e.preventDefault();
  e.stopPropagation();
  if (!product) return;
  addToWishlist({ _id: product._id, title: product.title, price: product.price, image1: product.image1, image2: product.image2 });
  openAddToWishlistModal(product._id);
};

  return (
    <>
      {slides.map((product) => (
        <div key={product._id} className="singleProductCarousel">
          <p className="wishlist"  onClick={(e) => handleAddToWishlist(e, product)}>♡</p>
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
            {t("Add-to-cart")}
          </button>
        </div>
      ))}
    </>
  );
}

export default SingleProductCarousel;
