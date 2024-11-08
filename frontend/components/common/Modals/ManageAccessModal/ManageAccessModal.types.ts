import { Group } from "@/api/request/group/types";
import { ModalProps } from "@/components/common";

export interface ManangeAccessModalProps extends ModalProps {
    folder : Group;
}