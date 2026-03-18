import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

//getUser
export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
}

//addUser
export const createUser = async (data) => {
  const response = await axios.post(`${API_URL}/users`, data);
  return response.data;
}