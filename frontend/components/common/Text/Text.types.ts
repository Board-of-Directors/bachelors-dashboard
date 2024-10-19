import { PropsWithClassName } from "@/types/utils";
import { HTMLAttributes } from "react";

export type As = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

type TextAttributes = HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

export interface TextProps extends PropsWithClassName<TextAttributes> {
  as?: As;
}
