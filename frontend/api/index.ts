import axios from "axios";

export const BASE_URL = "https://dashboard/v1";

export const api = axios.create({
    baseURL : BASE_URL,
    withCredentials : true
})
