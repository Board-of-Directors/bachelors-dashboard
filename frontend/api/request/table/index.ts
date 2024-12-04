import { api } from "@/api";
import { ChangeColumnPropertyRequest, ChangeRowColorRequest, Ids, ResponseTableDetail } from "./types";

export const getTableById = async (fileId: number): Promise<ResponseTableDetail> => {
    return api.get('/file/detail', { params: { fileId } })
}

export const changeRowColor = async (request : ChangeRowColorRequest) => {
    return api.put('/row/change', request);
}

export const changeColumnorder = async (ids : Ids) => {
    return api.put('/column/order', ids);
}

export const changeColumnProperty = async (request : ChangeColumnPropertyRequest) => {
    return api.put('/column/change', request);
}