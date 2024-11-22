import { BaseStyleWithProps } from "@/types/utils";
import { Box, chakra } from "@chakra-ui/react";

const ControlItem = chakra<typeof Box, { isSelected: boolean }>(Box, {
  baseStyle: ({ isSelected }: BaseStyleWithProps<{ isSelected: boolean }>) => ({
    padding: "10px 20px",
    background: isSelected ? "button.secondary" : "white",
    cursor: "pointer",
    transition: "background 300ms",

    _hover: {
      background: "button.secondary",
    },

    "& > svg": {
      stroke: isSelected ? "text.gray" : "icon.gray",
      width: "20px",
      height: "20px",
    },
  }),
});

const ControlGroup = chakra(Box, {
  baseStyle: {
    display: "inline-flex",
    borderRadius: "5px",
    borderWidth: "1px",
    borderColor: "button.secondary",
    overflow: "clip",
  },
});

export { ControlGroup, ControlItem };
