import { ModalProps } from "@/components/common";
import { FieldValues } from "react-hook-form";

export interface NewAssigneeModalProps extends ModalProps {
    onAddAssignees: (data: FieldValues) => void;
}