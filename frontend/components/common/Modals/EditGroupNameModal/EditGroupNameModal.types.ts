import { Group } from "@/api/request/group/types";
import { ModalProps } from "../../Modal/Modal.types";

export interface EditTableModalProps extends ModalProps {
    folder: Group;
}