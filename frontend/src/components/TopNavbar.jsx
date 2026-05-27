import React from "react";
import ponnoLogo from "../assets/logos/10041.png";
import cartLogo from "../assets/icons/shopping-bag.png";
import searchIcon from "../assets/icons/search.png";
import { Link } from "react-router-dom";
function TopNavbar() {
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
      <div className="cart">
        <div className="cartFlexbox">
          <img src={cartLogo} alt="cartLogo" className="cartLogo" />
          <span>
            <p className="cartProperty">0 item</p>
            <p className="cartProperty">$0.00</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
