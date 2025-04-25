import { api } from "@/api";
import { UserCredentials } from "./types";

export const authUser = async (request: UserCredentials): Promise<string> => {
  return api.post("/auth/login", request).then((response) => response.data)
};
