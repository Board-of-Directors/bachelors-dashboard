import { ButtonProps as NextButtonProps } from "@nextui-org/react";

export interface ButtonProps extends Omit<NextButtonProps, "size"> {
  size?: "sm" | "md" | "lg" | "xl";
  isSubmitting?: boolean;
}
