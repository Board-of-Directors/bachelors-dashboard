import { AccordionProps } from "@chakra-ui/react";
import { FolderProps } from "./AccordionItem/AccordionItem.types";

export interface FolderListProps extends AccordionProps {
  folders: FolderProps[];
}
