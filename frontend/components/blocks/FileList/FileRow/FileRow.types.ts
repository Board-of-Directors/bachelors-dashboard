import { ResponseFile } from "@/api/request/file/types";
import { BoxProps } from "@chakra-ui/react";

export interface XSLXFile {
    name: string;
    tableId: number;
}

export interface DOCXFile {
    name: string;
    href: string;
}

export type FileItem = XSLXFile | DOCXFile;

export interface FileRowProps extends BoxProps {
    file: ResponseFile;
}
