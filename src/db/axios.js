import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: "en-US",
  },
});

export default axiosInstance;
