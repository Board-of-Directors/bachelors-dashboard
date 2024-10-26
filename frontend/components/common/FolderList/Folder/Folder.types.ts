import { FileItem } from "./FolderItem/FolderItem.types";

interface OverrideFolderProps {
  onHover ?: (isHovered : boolean) => void;
}

interface FolderProps extends OverrideFolderProps {
  name: string;
  files: FileItem[];
}

export type { OverrideFolderProps, FolderProps }
