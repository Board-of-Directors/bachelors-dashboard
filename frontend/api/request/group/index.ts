import { api } from "@/api"
import { CreateGroupRequest, EditGroupRequest, GetAllGroupsResponse } from "./types"

const getAllGroups = async (): Promise<GetAllGroupsResponse> => {
    return api.get('/group/all')
}

const editGroup = async (request: EditGroupRequest): Promise<void> => {
    return api.put('/group', request)
}

const deleteGroup = async (id: number): Promise<void> => {
    return api.delete('/group', { params: { id } })
}

const createGroup = async ({ name }: CreateGroupRequest): Promise<void> => {
    return api.post('/group', { name })
}

export { createGroup, deleteGroup, editGroup, getAllGroups }
