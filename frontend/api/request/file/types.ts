interface OrderFilesRequest {
    groupId: number;
    ids: number[]
}

interface ResponseFile {
    id: number;
    name: string;
    type: string;
}

export type { ResponseFile, OrderFilesRequest };
