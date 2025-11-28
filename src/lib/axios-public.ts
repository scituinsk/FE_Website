import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:2000",
  headers: {
    "Content-Type": "application/json",
  },
  adapter: "fetch",
});
