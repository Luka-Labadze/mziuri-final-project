import "react";
import TestImage from "../assets/staticImages/10039.jpg";
import Modal from "../components/Modal";
import { useCart } from "../context/CartContext";
function CartModal() {
  const { isCartOpen, closeCart } = useCart();
  return (
    <Modal isOpen={isCartOpen} onClose={closeCart}>
      <div className="cartModal">
        <div className="emptyCart">
          <h3 className="emptyCartTitle">Your Cart Is Currently Empty</h3>
        </div>
        <div className="activeCart">
          <div className="activeCartUpper">
            <div className="activeCartImgQuant">
              <img
                src={TestImage}
                className="cartItemImage"
                alt="cartItemImage"
              />
              <p className="cartItemQuantity">{1}X</p>
            </div>
            <div className="activeCartTextSection">
              <h3 className="cartItemTitle">titletitletitle</h3>
              <h4 className="cartItemPrice">${"price"}</h4>
            </div>
          </div>

          <div className="activeCartMiddle">
            <div className="activeCartTotalPrice">
              <h4 className="activePriceTotal">Total:</h4>
              <h4 className="activeTotalPrice">${"price"}</h4>
            </div>
          </div>

          <div className="activeCartBottom">
            <button className="activeCartCheckout">Checkout</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CartModal;
