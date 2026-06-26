/* eslint-disable preserve-caught-error */
import axios from "axios";

const baseURL = "http://localhost:3000";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/products`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.err || "Failed to fetch products");
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/api/single-product/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.err || "Failed to fetch product");
  }
};

export const contact = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/api/users/contact`, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.err || "Failed to send contact email",
    );
  }
};

export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/api/users/register`, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.err || "Registration failed");
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/api/users/login`, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.err || "Login failed");
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(`${baseURL}/api/users/logout`, null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.err || "Logout failed");
  }
};

export const getToken = async () => {
  try {
    const response = await axios.post(`${baseURL}/api/users/get-token`, null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.err || "Token retrieval failed");
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/users/get`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.err || "Failed to fetch user data");
  }
};

export const forgotPasswordUser = async (data) => {
  try {
    const response = await axios.put(
      `${baseURL}/api/users/forgot-password`,
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.err || "Failed to send reset email");
  }
};

export const resetPasswordUser = async (data, token) => {
  try {
    const response = await axios.put(
      `${baseURL}/api/users/reset-password`,
      data,
      {
        headers: { Authorization: token },
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.err || "Failed to reset password");
  }
};

export const addToCartAPI = async (productId) => {
  try {
    const response = await axios.post(
      `${baseURL}/api/users/cart`,
      { productId },
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.err || "Failed to add to cart");
  }
};

export const removeFromCartAPI = async (productId) => {
  try {
    const response = await axios.delete(
      `${baseURL}/api/users/cart/${productId}`,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.err || "Failed to remove from cart");
  }
};

export const addToWishlistAPI = async (productId) => {
  try {
    const response = await axios.post(
      `${baseURL}/api/users/wishlist`,
      { productId },
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.err || "Failed to add to wishlist");
  }
};

export const removeFromWishlistAPI = async (productId) => {
  try {
    const response = await axios.delete(
      `${baseURL}/api/users/wishlist/${productId}`,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.err || "Failed to remove from wishlist",
    );
  }
};
