interface Group {
    favourite: boolean;
    name: string;
    id: number;
}

interface GetAllGroupsResponse {
    groups: Group[];
    count: number;
}

interface EditGroupRequest {
    favourite: boolean;
    name: string;
    id: number;
}

interface CreateGroupRequest {
    name: string;
}

export type { Group, CreateGroupRequest, EditGroupRequest, GetAllGroupsResponse };
