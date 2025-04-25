import axios from "axios";
import * as Figma from "figma-api";

export const BASE_URL = "http://84.201.165.70:8080/api/v1";
export const FIGMA_BASE_URL = "https://api.figma.com";

export const api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})

export const figmaApi = new Figma.Api({personalAccessToken : process.env.NEXT_PUBLIC_FIGMA_TOKEN});

api.interceptors.response.use((response) => response.data, (error) => Promise.reject(error));