import { api, BASE_URL } from "@/api";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants";
import { AuthCredentials, UserCredentials } from "./types";

export const updateToken = ({ accessToken, refreshToken }: AuthCredentials): string => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

  return accessToken;
};

export const authUser = async (request: UserCredentials): Promise<string> => {
  return api.post("/auth/login", request).then((data: any) => updateToken(data));
};

export const refresh = async (): Promise<string> => {
  const response = await fetch(`${BASE_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`,
    },
    credentials: "same-origin",
  });

  if (response.ok) {
    const data = await response.json();

    return updateToken(data);
  }
};

export const logout = async (): Promise<void> => {
  return api.post("/auth/logout");
};