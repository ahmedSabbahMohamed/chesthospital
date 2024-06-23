import axios from "axios";

const BASE_API = `https://2240-197-121-212-143.ngrok-free.app`;

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : null;
};

const getHeaders = () => {
  const token = getToken();

  if (token) {
    return {
      Authorization: token,
      "Content-Type": "multipart/form-data",
    };
  } else {
    return {
      "Content-Type": "multipart/form-data",
    };
  }
};

const API = axios.create({
  baseURL: BASE_API,
  headers: getHeaders(),
});

export { API };
