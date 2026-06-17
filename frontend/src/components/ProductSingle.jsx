import "react";
import { useCartWishlist } from "../context/CartWishlistContext";
import { useTranslation } from "react-i18next";
import { useCartModal } from "../context/AddToCartModalContext";
import { useWishlistModal } from "../context/AddToWishlistModalContext";
function ProductSingle({ id, img1, img2, title, price }) {
  const { t } = useTranslation();
  const { addToCart, addToWishlist } = useCartWishlist();
  const { openAddToCartModal } = useCartModal();
  const { openAddToWishlistModal } = useWishlistModal();
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ _id: id, title, price, image1: img1, image2: img2 });
    openAddToCartModal(id);
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToWishlist({ _id: id, title, price, image1: img1, image2: img2 });
    openAddToWishlistModal(id);
  };

  return (
    <div className="productSingle">
      <p className="wishlist" onClick={handleAddToWishlist}>
        ♡
      </p>

      <div className="imgContainer">
        <img alt="IMAGE" src={img1} className="productImg" id="image1" />
        <img alt="IMAGE2" src={img2} className="productImg" id="image2" />
      </div>

      <div className="titleAndPriceContainer">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>

      <button className="addToCart" onClick={handleAddToCart}>
        {t("ADD-TO-CART")}
      </button>
    </div>
  );
}

export default ProductSingle;
