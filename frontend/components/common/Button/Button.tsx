import { cn } from "@/utils/cn";
import { Button as NextButton, extendVariants } from "@nextui-org/react";

export const Button = extendVariants(NextButton, {
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
