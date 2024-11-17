import { BaseStyleWithProps } from "@/types/utils";
import { Box, chakra } from "@chakra-ui/react";

const ColumnHeader = chakra<typeof Box, { isDragging: boolean; id: string }>(Box, {
  baseStyle: ({ isDragging, id }: BaseStyleWithProps<{ isDragging: boolean }>) => ({
    padding: `20px 20px 20px ${id === "id" ? "102px" : "20px"}`,
    backgroundColor: isDragging ? "#F3F3F3" : "transparent",
    color: isDragging ? "#2C90ED" : "#A6A6A6",
    flexShrink: 0,
    borderRight: "1px solid #F3F3F3",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "var(--chakra-fonts-body)",
    textTransform: "none",
  }),
});

const Row = chakra(Box, {
  baseStyle: {
    width: "100%",
    display: "inline-flex",
    gap: "12px",
    alignItems: "center",
    height: "fit-content",
  },
});

const IconWrapper = chakra(Box, {
  baseStyle: {
    width: "24px",
    height: "24px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3f3f3",
    flexShrink: 0,

    "&:hover": {
      background: "#dedede",
    },
  },
});

export { ColumnHeader, IconWrapper, Row };
