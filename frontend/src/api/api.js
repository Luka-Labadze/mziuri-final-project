import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/products");

    return response.data;
  } catch (error) {
    console.error(
      "Failed fetching products from backend with Axios:",
      error.message,
    );
    throw error;
  }
};




export const getProductById = async (id) => {
  const response = await axios.get(`/api/single-product/${id}`);
  return response.data;
};