import { Box, chakra } from "@chakra-ui/react";

const OverflowContainer = chakra(Box, {
  baseStyle: {
    overflowX: "scroll",
    overflowY: "hidden",
  },
});

const TableContainer = chakra(Box, {
  baseStyle: {
    width: "100% !important",
  },
});

export { OverflowContainer, TableContainer };

