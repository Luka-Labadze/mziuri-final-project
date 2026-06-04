import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LoaderProvider } from "./context/LoaderContext.jsx";
import { CartModalProvider } from "./context/AddToCartModalContext.jsx";
import { BrowserRouter } from "react-router-dom";
import AddToCartModal from "./modals/AddToCart.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { NotificationProvider } from './context/NotificationContext.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoaderProvider>
        <NotificationProvider>
          <CartModalProvider>
            <CartProvider>
              <App />
            </CartProvider>
            <AddToCartModal />
          </CartModalProvider>
        </NotificationProvider>
      </LoaderProvider>
    </BrowserRouter>
  </StrictMode>,
);
