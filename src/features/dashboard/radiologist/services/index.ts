import axios from "axios";

const BASE_API = `https://chesthospital-backend.onrender.com/api/radiologist`;

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
