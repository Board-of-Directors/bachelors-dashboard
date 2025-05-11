import { api } from "@/api";
import { ResponseTableHistoryItem, ResponseTableHistoryShort } from "./types";

export const getAllChanges = (): Promise<ResponseTableHistoryShort[]> => {
  return api.get("/history/by-table");
};

export const getTableChanges = (id: string): Promise<ResponseTableHistoryItem[]> => {
  return api.get("/history/by-table-id", { params: id });
};
