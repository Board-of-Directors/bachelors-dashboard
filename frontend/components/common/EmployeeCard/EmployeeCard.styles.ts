import { Box, chakra } from "@chakra-ui/react";

export const Container = chakra(Box, {
  baseStyle: {
    borderColor: "button.secondary",
    justifyContent: "space-between",
    gridColumn: "span 1 / span 1",
    borderRadius: "10px",
    alignItems: "center",
    borderWidth: '1px',
    padding: "20px",
    display: "flex",
  },
});

export const IconContainer = chakra(Box, {
    width: '24px',
    height: '24px'
})