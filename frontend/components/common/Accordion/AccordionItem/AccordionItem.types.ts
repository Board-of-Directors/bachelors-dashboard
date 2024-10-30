import { FileItem } from "../FileRow/FileRow.types";

interface FolderProps {
    files: FileItem[];
    name: string;
}

interface AccordionItemProps {
    onEditGroupNameClick: (folderName: string) => void;
    onManageAccessClick: (folderName: string) => void;
    folder: FolderProps;
}

export type { AccordionItemProps, FolderProps };
