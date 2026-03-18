import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

//get
export const getProduct = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error getProduct:", error);
    throw error;
  }
};

//post
export const createProduct = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/products`, data);
    return response.data;
  } catch (error) {
    console.error("Error createProduct:", error);
    throw error;
  }
};

//put
export const updateProduct = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/products/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updateProduct:", error);
    throw error;
  }
};

//delete
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleteProduct:", error);
    throw error;
  }
};
