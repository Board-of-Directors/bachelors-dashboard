import { api } from "@/api";
import { OrderFilesRequest, ResponseFile } from "./types";

const orderFiles = async (request: OrderFilesRequest): Promise<void> => {
  return api.put("/file", request);
};

const uploadFile = async (file: File): Promise<string> => {
  return api.putForm("/upload", { file: new Blob([file]) });
};

const getGroupFiles = async (groupId?: number): Promise<ResponseFile[]> => {
  return api.get("/file", { params: { groupId } }).then((response: any) => response.files);
};

export { getGroupFiles, orderFiles, uploadFile };
