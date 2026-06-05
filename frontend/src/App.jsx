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
// import { useUserData } from "./context/UserContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useEffect, useState } from "react";
import { getToken } from "./api/api.js";

function App() {
  useAppScale();
  useScrollTop();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
    const checkAuth = async () => {
      try {
        // This hits your /api/users/get-token endpoint
        const response = await getToken();
        if (response.data) {
          setIsLoggedIn(true);
        }
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);
  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn} element={<Products />} />
            }
          />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      </Main>
      <Footer />
      <LoaderScreen />
      <Notification />
    </>
  );
}

export default App;
