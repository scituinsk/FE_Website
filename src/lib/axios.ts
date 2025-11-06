import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:2000",
  withCredentials: true,
  adapter: "fetch",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
