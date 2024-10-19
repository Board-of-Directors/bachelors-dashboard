import { FolderProps } from "../Folder/Folder.types";

export interface AccordionItemProps { 
    folder : FolderProps;
    key : any;
    onManageAccessClick : (folderName : string) => void;
    onEditGroupNameClick : (folderName : string) => void;
    onClickTooltip : () => void;
}