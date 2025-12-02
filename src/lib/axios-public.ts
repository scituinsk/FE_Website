import axios from "axios";

import { getBaseURL } from "@/utils/get-base-url";

export const axiosPublic = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
  adapter: "fetch",
});
