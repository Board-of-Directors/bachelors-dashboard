import { FileItem } from "../FileRow/FileRow.types";

interface FolderProps {
    favourite: boolean;
    files: FileItem[];
    name: string;
    id: number;
}

interface AccordionItemProps {
    folder: FolderProps;
}

export type { AccordionItemProps, FolderProps };
