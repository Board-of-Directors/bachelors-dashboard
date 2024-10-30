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
    file: FileItem;
}
