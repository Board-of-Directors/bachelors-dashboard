import { ModalProps as NextModalProps } from "@nextui-org/modal";
import { ReactNode } from "react";

type ModalClassNames = NextModalProps["classNames"] & { content?: string };
type Omitted = Omit<NextModalProps, "content" | "children" | "classNames">;

export interface ModalBuilderProps extends Omitted {
  classNames?: ModalClassNames;
  footer?: ReactNode;
  header: ReactNode;
  body: ReactNode;
}

export interface ModalProps extends Pick<ModalBuilderProps, "onOpenChange" | "isOpen"> {}
