import axios from "axios";

export const BASE_URL = "http://84.201.165.70:8080/api/v1";

export const api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})

api.interceptors.response.use((response) => response.data, (error) => Promise.reject(error));