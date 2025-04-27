import { BaseStyleWithProps } from "@/types/utils";
import { Box, chakra, Td } from "@chakra-ui/react";

const TableCell = chakra<typeof Box, { isDragging: boolean }>(Box, {
  baseStyle: ({ isDragging }: BaseStyleWithProps<{ isDragging: boolean }>) => ({
    padding: "28px 0px 28px 20px",
    background: isDragging ? "#F3F3F3" : "",
    borderRight: "1px solid #F3F3F3",
    flexShrink: 0,
    fontWeight: "500",
    color: "#181818",
  }),
});

const FlexContainer = chakra(Box, {
  baseStyle: {
    display: "inline-flex",
    gap: "12px",
  },
});

const ChevronButtonSkeleton = chakra(Box, {
  baseStyle: {
    width: "20px",
    height: "20px",
  },
});

const DataContainer = chakra(Box);

export { FlexContainer, TableCell, ChevronButtonSkeleton, DataContainer };
