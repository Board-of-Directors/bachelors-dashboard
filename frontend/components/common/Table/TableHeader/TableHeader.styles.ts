import { Box, chakra } from "@chakra-ui/react";

const TableRow = chakra<typeof Box, { firstCellOffset?: number }>(Box, {
  baseStyle: {
    display: "inline-flex",
    width: "100%",
  },
});

const Header = chakra(Box, {
  baseStyle: {
    display: "inline-flex",
    borderBottomWidth: "1px",
    borderTopWidth: "1px",
    borderColor: "#F3F3F3",
  },
});

export { TableRow, Header };
