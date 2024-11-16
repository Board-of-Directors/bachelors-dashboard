import { api } from "@/api"

type ResponseTable = any

export const getTableById = (fileId : number) : Promise<ResponseTable> => {
    return api.get<ResponseTable, Error>('/file/detail', {params : {fileId}})
}