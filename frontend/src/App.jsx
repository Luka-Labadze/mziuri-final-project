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
function App() {
  useAppScale();
  useScrollTop();
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
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
