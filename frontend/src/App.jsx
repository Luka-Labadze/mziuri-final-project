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
import { getToken } from "./api/api.js";
import useDocumentTitle from "./hooks/useDocumentTitle.jsx";

function App() {
  useAppScale();
  useScrollTop();
  useDocumentTitle()
  const { loggedIn, login, logout } = useUserData();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await getToken();
        if (response.data) {
          login(response.data);
        }
      } catch (err) {
        logout();
        console.error("Auth check failed", err);
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
        </Routes>
      </Main>
      <Footer />
      <LoaderScreen />
      <Notification />
    </>
  );
}

export default App;
