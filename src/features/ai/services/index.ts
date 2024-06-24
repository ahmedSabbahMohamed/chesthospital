import axios from "axios";

const BASE_API = `https://9091-2c0f-fc88-6-417e-d540-fd8c-bdfa-e9df.ngrok-free.app`;

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
