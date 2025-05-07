import { Box, chakra } from "@chakra-ui/react";

const Header = chakra(Box, {
  baseStyle: {
    width: "100%",
    padding: "12px 20px",
  },
});

const IconRow = chakra(Box, {
  baseStyle: {
    display: "inline-flex",
    gap: "12px",
    padding: "12px 20px",
    borderBottomWidth: "1px",
    borderBottomColor: "#F3F3F3",
    cursor: "pointer",
    userSelect: 'none',

    "&:hover": {
      backgroundColor: "#F3F3F3",
    },
  },
});

export { Header, IconRow };
