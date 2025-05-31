import { ResponseFile } from "@/api/request/file/types";

export interface XSLXFile {
    name: string;
    tableId: number;
}

export interface DOCXFile {
    name: string;
    href: string;
}

export type FileItem = XSLXFile | DOCXFile;

export interface FileRowProps {
    borderTopWidth?: string;
    file: ResponseFile;
}
