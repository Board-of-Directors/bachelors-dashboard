export interface File {
  id: number;
  name: string;
  folderId: number;
}

export interface FileManagerContextType {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  moveFile: (fileId: number, targetFolderId: number) => void;
}
