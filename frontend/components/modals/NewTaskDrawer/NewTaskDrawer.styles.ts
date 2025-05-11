import { Box, chakra } from "@chakra-ui/react";

const Block = chakra(Box, {
  baseStyle: {
    width: "100%",
    padding: "28px 40px",
    display: "flex",
    flexDirection: "column",
    borderBottomColor: "#F3F3F3",
    borderBottomWidth: "1px",
    gap: "16px",
  },
});

export { Block };
