import { OverrideFolderProps } from "../Folder.types";

export interface XSLXFile {
  name: string;
  tableId: number;
}

export interface DOCXFile {
  name: string;
  href: string;
}

export type FileItem = XSLXFile | DOCXFile;

export interface FolderItemProps extends OverrideFolderProps {
  file: FileItem;
}
