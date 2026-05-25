import React from "react";
import { Link } from "react-router-dom";

function BottomNavbar() {
  const staticProductId = "6a118ecd8ecd47c3272b0c5d";

  return (
    <div className="bottomNavbar">
      <div className="navWrapper">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/products">
          Shop
        </Link>
        <Link className="links" to={`/single-product/${staticProductId}`}>
          Products
        </Link>
        <Link className="links" to="/contact">
          Contact
        </Link>
        <Link className="links" to="/about">
          About Us
        </Link>
      </div>
      <div className="authWrapper">
        <Link to="/register" className="auth">
          Sign Up
        </Link>
        <Link to="/login" className="auth">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default BottomNavbar;
