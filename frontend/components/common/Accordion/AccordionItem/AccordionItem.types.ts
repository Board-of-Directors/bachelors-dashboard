import { FileItem } from "../FileRow/FileRow.types";

interface FolderProps {
    favourite: boolean;
    name: string;
    id: number;
}

interface AccordionItemProps {
    folder: FolderProps;
}

export type { AccordionItemProps, FolderProps };
