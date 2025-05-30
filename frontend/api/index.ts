import { ACCESS_TOKEN_KEY } from "@/constants";
import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";
import { logout, refresh } from "./request/auth";

export const BASE_URL = "http://84.201.165.70:8080/api/v1";
export const FIGMA_BASE_URL = "https://api.figma.com";

export const api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

api.interceptors.request.use(async (config) => {
  let accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (accessToken) {
    const { exp } = jwtDecode(accessToken);

    const expDate = new Date(0);
    expDate.setUTCSeconds(exp);

    if (dayjs(expDate).isBefore(dayjs())) {
        try {
            accessToken = await refresh();
        } catch {
            await logout();
        }
    }

    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);
