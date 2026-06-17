import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { useWishlistModal } from "../context/AddToWishlistModalContext";
import { getProductById } from "../api/api";
import CloseImage from "../assets/icons/X.svg";
import { Link } from "react-router-dom";
const AddToWishlist = () => {
  const { isOpen, selectedId, closeAddToWishlistModal } = useWishlistModal();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (isOpen && selectedId) {
      getProductById(selectedId)
        .then((data) => {
  setProduct(data);
})
        .catch((err) => console.error("err", err));
    } else {
      setProduct(null);
    }
  }, [selectedId, isOpen]);

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeAddToWishlistModal}>
      {product ? (
        <div className="addToWishlist">
          <button
            className="atcCloseBtn"
            onClick={closeAddToWishlistModal}
            aria-label="Close"
          >
            <img src={CloseImage} alt="Close" />
          </button>
          <div className="ATWWrapper">
            <div className="ATWLeftSide">
              <img
                className="ATWImg"
                src={product.image1}
                alt={product.title}
              />
            </div>
            <div className="ATWRightSide">
              <ul className="ATWRigthWrapper">
                <li className="ATWTitle">{product.title}</li>
                <li className="ASTWSWrapper">
                  <span className="ASTWSuccess">✓</span>
                  <p className="successMsg">Added to Wishlist successfully!</p>
                </li>
                <li className="ATWBtnWrapper">
                  <Link to="/wishlist" onClick={closeAddToWishlistModal}>
                    <button className="viewWishlist">View Wishlist</button>
                  </Link>
                  <Link to="/checkout" onClick={closeAddToWishlistModal}>
                    <button className="checkout">Checkout</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="addToWishlist">Loading...</div>
      )}
    </Modal>
  );
};

export default AddToWishlist;
