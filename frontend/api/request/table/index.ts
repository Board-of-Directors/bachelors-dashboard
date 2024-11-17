import { api } from "@/api"
import { ResponseTableDetail } from "./types"

export const getTableById = (fileId: number): Promise<ResponseTableDetail> => api.get('/file/detail', { params: { fileId } })