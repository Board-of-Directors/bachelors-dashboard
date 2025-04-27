import { ModalProps as NextModalProps } from "@nextui-org/modal";
import { ReactNode } from "react";

export interface ModalBuilderProps extends Omit<NextModalProps, "content" | "children"> {
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}

export interface ModalProps extends Pick<ModalBuilderProps, 'onOpenChange' | 'isOpen'> { }