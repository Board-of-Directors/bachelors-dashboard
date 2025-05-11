import { SelectItem, SelectProps } from "@/components/common";
import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";
import { ModalProps } from "../Modal/Modal.types";

interface ChildrenProps {
  elements: SelectItem[];
  remove: (index: number) => void;
}

export interface MultiselectModalProps extends ModalProps {
  selectProps: Pick<SelectProps, "placeholder" | "label">;
  children: (props: ChildrenProps) => any;
  onSubmit: (data: FieldValues) => void;
  items: SelectItem[];
  buttonText?: string;
  header: ReactNode;
}
