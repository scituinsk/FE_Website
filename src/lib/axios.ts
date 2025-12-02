import axios, { AxiosInstance } from "axios";

import { getBaseURL } from "@/utils/get-base-url";

const apiClient: AxiosInstance = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
