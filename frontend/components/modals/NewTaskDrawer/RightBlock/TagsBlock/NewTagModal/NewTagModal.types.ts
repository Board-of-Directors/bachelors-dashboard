import { ModalProps } from "@/components/common";
import { FieldValues } from "react-hook-form";

export interface NewTagModalProps extends ModalProps {
  onAddTag: (data: FieldValues) => void;
}
