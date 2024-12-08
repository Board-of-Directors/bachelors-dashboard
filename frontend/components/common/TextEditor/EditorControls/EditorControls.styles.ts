import { Box, chakra } from "@chakra-ui/react";

const Container = chakra(Box, {
  baseStyle: {
    display: "inline-flex",
    gap: "16px",
  },
});

export { Container };
