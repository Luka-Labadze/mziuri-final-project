import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { useCartModal } from "../context/AddToCartModalContext";
import { getProductById } from "../api/api"; // Using your API helper
import CloseImage from "../assets/icons/X.svg";
const AddToCart = () => {
  const { isOpen, selectedId, closeAddToCartModal } = useCartModal();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (isOpen && selectedId) {
      getProductById(selectedId)
        .then((data) => setProduct(data))
        .catch((err) => console.error("err", err));
    } else {
      setProduct(null);
    }
  }, [selectedId, isOpen]);

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeAddToCartModal}     >
      {product ? (
        <div className="addToCart">
          <button
            className="atcCloseBtn"
            onClick={closeAddToCartModal}
            aria-label="Close"
          >
            <img src={CloseImage} alt="Close" />
          </button>
          <div className="ATCWrapper">
            <div className="ATCLeftSide">
              <img
                className="ATCImg"
                src={product.image1}
                alt={product.title}
              />
            </div>
            <div className="ATCRightSide">
              <ul className="ATCRigthWrapper">
                <li className="ATCTitle">{product.title}</li>
                <li className="ASTCSWrapper">
                  <span className="ASTCSuccess">✓</span>
                  <p className="successMsg">Added to cart successfully!</p>
                </li>
                <li className="ATCBtnWrapper">
                  <button className="viewCart" onClick={closeAddToCartModal}>
                    View Cart
                  </button>
                  <button className="checkout" onClick={closeAddToCartModal}>
                    Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="addToCart">Loading...</div>
      )}
    </Modal>
  );
};

export default AddToCart;
