import { Box, chakra } from "@chakra-ui/react";

const Container = chakra(Box, {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    gridColumn: "span 8 / span 8",
    padding: "28px 0px",
    borderRightColor: "button.secondary",
    borderRightWidth: "1px",
    minHeight: "100%",
  },
});

export { Container };
