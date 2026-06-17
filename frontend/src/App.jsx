/* eslint-disable no-unused-vars */
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
import useScrollTop from "./hooks/useScrollTop.jsx";
import useAppScale from "./hooks/useAppScale.jsx";
import { useUserData } from "./context/UserContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useEffect } from "react";
import { getUser } from "./api/api.js";
import useDocumentTitle from "./hooks/useDocumentTitle.jsx";
import ForgotPassword from "./routes/ForgotPassword.jsx";
import ResetPassword from "./routes/ResetPassword.jsx";
import useLanguage from "./hooks/useLanguage.jsx";
import Cart from "./routes/Cart.jsx";
import Wishlist from "./routes/Wishlist.jsx";
import Checkout from "./routes/Checkout.jsx";

function App() {
  useAppScale();
  useScrollTop();
  useDocumentTitle();
  useLanguage();
  const { loggedIn, login, logout } = useUserData();

 useEffect(() => {
  const checkAuth = async () => {
    try {
      const response = await getUser();
      if (response.data) {
        login(response.data);
      }
    } catch (err) {
      // don't call logout() here — user is simply not logged in
      // logout() should only be called when user explicitly clicks logout
      console.log("No active session");
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Main>
      <Footer />
      <LoaderScreen />
      <Notification />
    </>
  );
}

export default App;