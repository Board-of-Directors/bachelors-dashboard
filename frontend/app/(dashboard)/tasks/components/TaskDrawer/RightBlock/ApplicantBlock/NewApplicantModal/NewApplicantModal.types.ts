import { ModalProps } from "@/components/common";
import { FieldValues } from "react-hook-form";

export interface NewApplicantModalProps extends ModalProps {
    onAddApplicants: (data: FieldValues) => void;
}