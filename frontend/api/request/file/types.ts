export interface OrderFilesRequest {
  groupId: number;
  ids: { id: number }[];
}

export interface UploadDocumentRequest {
  externalId: string;
  name: string;
  groupId: 0;
}

export interface ResponseFile {
  id: number;
  name: string;
  type: string;
}
