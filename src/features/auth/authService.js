import axios from "axios";
import { API_URL } from "../Api";

const logout = async () => {
  localStorage.removeItem("charizUser");
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);

  if (response.data) {
    localStorage.setItem("charizUser", JSON.stringify(response.data));
  }
  return response.data;
};

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

const update = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}/user`, userData, config);
  if (response.data) {
    localStorage.setItem(
      "charizUser",
      JSON.stringify({ token, user: response.data.user })
    );
  }
  return response.data;
};

const sendMessage = async (data, token) => {
  const response = await axios.post(`${API_URL}/contact`, data);
  return response.data;
};

const authService = {
  logout,
  login,
  register,
  update,
  sendMessage,
};

export default authService;
