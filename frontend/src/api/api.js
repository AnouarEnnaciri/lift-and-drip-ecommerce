import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Inject token automatically on every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
