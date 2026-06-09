import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../context/UserContext";
import * as api from "../api/api";
function BottomNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { loggedIn, logout, userData } = useUserData();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!userData?._id) return;
      try {
        const data = await api.getTodos(userData._id);
        if (data?.data) {
          console.log(data.data);
        } else if (data?.err) {
          alert(data.err);
          navigate("/login");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, [userData, navigate]);

  const handleLogout = async () => {
    try {
      await api.logoutUser();
      logout();
    } catch (err) {
      console.log(err);
    }
  };

  const staticProductId = "6a118ecd8ecd47c3272b0c5d";

  return (
    <div className={`bottomNavbar ${scrolled ? "active" : ""}`}>
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
        {loggedIn && userData ? (
          <>
            <Link to="/contact" className="auth">
              Hi, {userData.firstname}
            </Link>
            <button onClick={handleLogout} className="logoutBtn">
              logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="auth">
              Sign Up
            </Link>
            <Link to="/login" className="auth">
              Log In
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default BottomNavbar;
