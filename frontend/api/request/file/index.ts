import { api } from "@/api";
import { OrderFilesRequest, ResponseFile, UploadDocumentRequest } from "./types";

export const orderFiles = async (request: OrderFilesRequest): Promise<void> => {
  return api.put("/file", request);
};

export const uploadFile = async (file: File): Promise<string> => {
  return api.putForm("/file/upload", { file: new Blob([file]) });
};

export const uploadDocument = async (request: UploadDocumentRequest): Promise<void> => {
  return api.post("/file/docs", request);
};

export const uploadTable = async (request: UploadDocumentRequest): Promise<void> => {
  return api.post("/file/table/v2", request);
};

export const getGroupFiles = async (groupId?: number): Promise<ResponseFile[]> => {
  return api.get("/file", { params: { groupId } }).then((response: any) => response.files);
};
