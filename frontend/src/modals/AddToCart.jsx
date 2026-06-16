import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { useCartModal } from "../context/AddToCartModalContext";
import { getProductById } from "../api/api";
import CloseImage from "../assets/icons/X.svg";
import { Link } from "react-router-dom";
const AddToCart = () => {
  const { isOpen, selectedId, closeAddToCartModal } = useCartModal();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (isOpen && selectedId) {
      getProductById(selectedId)
        .then((data) => {
          setProduct(data);
          const prev = JSON.parse(localStorage.getItem("cart")) || [];
          const alreadyExists = prev.find((p) => p._id === data._id);
          if (!alreadyExists) {
            localStorage.setItem("cart", JSON.stringify([...prev, data]));
          }
        })
        .catch((err) => console.error("err", err));
    } else {
      setProduct(null);
    }
  }, [selectedId, isOpen]);

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeAddToCartModal}>
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
                  <Link to="/cart" onClick={closeAddToCartModal}>
                    <button className="viewCart">View Cart</button>
                  </Link>
                  <button className="checkout">Checkout</button>
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
