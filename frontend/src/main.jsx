import "./i18n/i18n.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LoaderProvider } from "./context/LoaderContext.jsx";
import { CartModalProvider } from "./context/AddToCartModalContext.jsx";
import { BrowserRouter } from "react-router-dom";
import AddToCartModal from "./modals/AddToCart.jsx";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { CartWishlistProvider } from "./context/CartWishlistContext.jsx";
import { WishlistModalProvider } from "./context/AddToWishlistModalContext.jsx";
import AddToWishlist from "./modals/AddToWishlistModal.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <LoaderProvider>
          <NotificationProvider>
            <CartWishlistProvider>
              <WishlistModalProvider>
                <CartModalProvider>
                  <App />
                  <AddToCartModal />
                  <AddToWishlist />
                </CartModalProvider>
              </WishlistModalProvider>
            </CartWishlistProvider>
          </NotificationProvider>
        </LoaderProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
