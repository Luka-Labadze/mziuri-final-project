import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../context/UserContext";
import * as api from "../api/api";
import useLanguage from "../hooks/useLanguage";
import { useTranslation } from "react-i18next";
function BottomNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { loggedIn, logout, userData } = useUserData();
  const navigate = useNavigate();

  const { t } = useTranslation();
  const { handleChangeLanguage } = useLanguage();
  useEffect(() => {
    const fetchData = async () => {
      if (!userData?._id) return;
      try {
        const data = await api.getProducts(userData._id);
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
          {t("Home")}
        </Link>
        <Link className="links" to="/products">
          {t("Shop")}
        </Link>
        <Link className="links" to={`/single-product/${staticProductId}`}>
          {t("Products")}
        </Link>
        <Link className="links" to="/contact">
          {t("Contact")}
        </Link>
        <Link className="links" to="/about">
          {t("About-Us")}
        </Link>
      </div>
      <div className="authWrapper">
        {loggedIn && userData ? (
          <>
            <Link to="/contact" className="auth">
              {t("Hi")}, {userData.firstname}
            </Link>
            <button onClick={handleLogout} className="logoutBtn">
              {t("Logout")}
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="auth">
              {t("Sign-Up")}
            </Link>
            <Link to="/login" className="auth">
              {t("Log-In")}
            </Link>
          </>
        )}
        <button onClick={handleChangeLanguage} className="changeLanguage">
          {t("Change-Language")}
        </button>
      </div>
    </div>
  );
}

export default BottomNavbar;
