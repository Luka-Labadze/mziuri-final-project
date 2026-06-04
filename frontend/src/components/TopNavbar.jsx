import "react";
import ponnoLogo from "../assets/logos/10041.png";
import cartLogo from "../assets/icons/shopping-bag.png";
import searchIcon from "../assets/icons/search.png";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
function TopNavbar() {
  const { toggleCart, cartItems } = useCart();

  // Calculate totals dynamically
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <div className="topNavbar">
      <Link to="/">
        <img src={ponnoLogo} alt="ponnoLogo" className="ponnoLogo" />
      </Link>
      <div className="searchWrap">
        <input
          type="text"
          className="searchBar"
          placeholder="Search our store"
        />
        <img src={searchIcon} alt="searchIcon" className="searchIcon" />
      </div>
      <div className="cart" onClick={toggleCart}>
        <div className="cartFlexbox">
          <img src={cartLogo} alt="cartLogo" className="cartLogo" />
          <span>
            <p className="cartProperty">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </p>
            <p className="cartProperty">${totalPrice.toFixed(2)}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
