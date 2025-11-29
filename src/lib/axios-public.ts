import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "https://api.scituinsk.com",
  headers: {
    "Content-Type": "application/json",
  },
  adapter: "fetch",
});
