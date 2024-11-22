import { Box, chakra } from "@chakra-ui/react";

export const Header = chakra(Box, {
  baseStyle: {
    width: "100%",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
});
