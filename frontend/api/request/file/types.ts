export interface OrderFilesRequest {
  groupId: number;
  ids: { id: number }[];
}

export interface UploadDocumentRequest {
  externalId: string;
  groupId: number;
  name: string;
}

export interface ResponseFile {
  id: number;
  name: string;
  type: string;
}
