import axios from "axios";

const API_URL = "https://localhost:7254/api"; 

export const getCarBrands = async () => {
  return await axios.get(`${API_URL}/carbrands`);
};

export const createCarBrand = async (data) => {
  return await axios.post(`${API_URL}/carbrands`, data);
};

// Similarly, implement getCars, createCar, getCarParts, etc.
