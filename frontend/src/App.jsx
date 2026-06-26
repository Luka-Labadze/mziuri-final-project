// eslint-disable no-unused-vars 
import "./styles/App.scss";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import { Routes, Route } from "react-router-dom";
import {
  Contact,
  Products,
  SingleProduct,
  AboutUs,
  Home,
  Register,
  Login,
} from "./routes/index.js";
import LoaderScreen from "./components/LoaderScreen.jsx";
import Notification from "./components/Notification.jsx";
import useScrollTop from "./hooks/useScrollTop.js";
import useAppScale from "./hooks/useAppScale.js";
import { useUserData } from "./context/UserContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useEffect } from "react";
import { getUser, getToken } from "./api/api.js";
import useDocumentTitle from "./hooks/useDocumentTitle.js";
import ForgotPassword from "./routes/ForgotPassword.jsx";
import ResetPassword from "./routes/ResetPassword.jsx";
import useLanguage from "./hooks/useLanguage.js";
import Cart from "./routes/Cart.jsx";
import Wishlist from "./routes/Wishlist.jsx";
import Checkout from "./routes/Checkout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  useAppScale();
  useScrollTop();
  useDocumentTitle();
  useLanguage();
  const { loggedIn, login, logout } = useUserData();

 useEffect(() => {
  const checkAuth = async () => {
    try {
      await getToken();
      const response = await getUser();
      if (response?.data) {
        login(response.data);
      }
    } catch {
      logout();
    }
  };

  checkAuth();
}, []);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute loggedIn={loggedIn} element={<Products />} />
            }
            />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route
            path="/cart"
            element={<ProtectedRoute loggedIn={loggedIn} element={<Cart />} />}
            />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute loggedIn={loggedIn} element={<Wishlist />} />
            }
            />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Main>
      <Footer />
            <ScrollToTop/>
      <LoaderScreen />
      <Notification />
    </>
  );
}

export default App;
