interface OrderFilesRequest {
    groupId: number;
    ids: {id : number}[]
}

interface ResponseFile {
    id: number;
    name: string;
    type: string;
}

export type { ResponseFile, OrderFilesRequest };
