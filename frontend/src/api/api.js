import axios from "axios";

export const fetchProducts = async () => {
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
