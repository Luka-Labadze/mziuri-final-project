import { createContext, useContext, useState, useEffect } from "react";
import { useUserData } from "./UserContext";
import {
  addToCartAPI,
  removeFromCartAPI,
  addToWishlistAPI,
  removeFromWishlistAPI,
} from "../api/api";

const CartWishlistContext = createContext();

export const useCartWishlist = () => useContext(CartWishlistContext);

export const CartWishlistProvider = ({ children }) => {
  const { loggedIn, userData } = useUserData();
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (loggedIn && userData) {
      setCart(userData.cart || []);
      setWishlist(userData.wishlist || []);
    } else {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
      setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    }
  }, [loggedIn, userData]);


  const addToCart = async (product) => {
    const already = cart.find((p) => p._id === product._id);
    if (already) return;

    if (loggedIn) {
      try {
        const res = await addToCartAPI(product._id);
        setCart(res.data);
      } catch (err) {
        console.error(err);
      }
    } else {
      const updated = [...cart, product];
      setCart(updated);
      localStorage.setItem("cart", JSON.stringify(updated));
    }
  };

  const removeFromCart = async (productId) => {
    if (loggedIn) {
      try {
        const res = await removeFromCartAPI(productId);
        setCart(res.data);
      } catch (err) {
        console.error(err);
      }
    } else {
      const updated = cart.filter((p) => p._id !== productId);
      setCart(updated);
      localStorage.setItem("cart", JSON.stringify(updated));
    }
  };


  const addToWishlist = async (product) => {
    const already = wishlist.find((p) => p._id === product._id);
    if (already) return;

    if (loggedIn) {
      try {
        const res = await addToWishlistAPI(product._id);
        setWishlist(res.data);
      } catch (err) {
        console.error(err);
      }
    } else {
      const updated = [...wishlist, product];
      setWishlist(updated);
      localStorage.setItem("wishlist", JSON.stringify(updated));
    }
  };

  const removeFromWishlist = async (productId) => {
    if (loggedIn) {
      try {
        const res = await removeFromWishlistAPI(productId);
        setWishlist(res.data);
      } catch (err) {
        console.error(err);
      }
    } else {
      const updated = wishlist.filter((p) => p._id !== productId);
      setWishlist(updated);
      localStorage.setItem("wishlist", JSON.stringify(updated));
    }
  };

  useEffect(() => {
    if (!loggedIn) {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
      setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    }
  }, [loggedIn]);

  return (
    <CartWishlistContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};