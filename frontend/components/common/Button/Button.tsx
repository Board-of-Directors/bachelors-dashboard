"use client";

import { cn } from "@/utils/cn";
import { Spinner } from "@chakra-ui/react";
import { extendVariants, Button as NextButton } from "@nextui-org/react";
import { Text } from "../Text/Text";
import { useLoading } from "./Button.hooks";
import { ButtonProps } from "./Button.types";

const StyledButton = extendVariants(NextButton, {
  variants: {
    color: {
      warning: "text-indicator-warning bg-background-warning font-medium",
      primary: "text-text-white bg-button-primary font-medium",
      secondary: "text-text-black bg-button-secondary font-medium",
    },
    isDisabled: {
      true: "text-text-gray bg-button-secondary",
    },
    size: {
      icon: cn([
        "!size-6 !min-w-fit !p-0 flex items-center justify-center",
        "hover:bg-gray-200 transition duration-200",
      ]),
      sm: "px-3 py-2 !rounded-[10px]",
      md: "px-6 py-4",
      xl: "px-6 py-4 w-full",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
  compoundVariants: [
    {
      className: "h-fit rounded-[5px] text-base",
    },
  ],
});

export const Button = ({ children, isSubmitting, ...props }: ButtonProps) => {
  const dots = useLoading(isSubmitting);

  return (
    <StyledButton {...props}>
      {isSubmitting ? <Spinner size="sm" /> : null}
      {isSubmitting ? <Text>Отправка{dots}</Text> : children}
    </StyledButton>
  );
};
