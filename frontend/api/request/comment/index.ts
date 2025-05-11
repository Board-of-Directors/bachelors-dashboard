import { api } from "@/api";
import { Comment, CreateCommentRequest } from "./types";

export const createComment = (request: CreateCommentRequest): Promise<void> => {
  return api.post("/comment", request);
};

export const getCommentByInsurance = (studentInsurance: string): Promise<Comment[]> => {
  return api.get("/comment/by-student", { params: { studentInsurance } });
};
