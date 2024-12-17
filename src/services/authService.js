import axios from "axios";

const API_URL = "https://localhost:5001/api/auth"; // Your backend API

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (credentials) => {
  return await axios.post(`${API_URL}/login`, credentials);
};
