import { BaseStyleWithProps } from "@/types/utils";
import { Box, chakra } from "@chakra-ui/react";

export const Container = chakra<typeof Box, { isExpanded: boolean }>(Box, {
  baseStyle: ({ isExpanded }: BaseStyleWithProps<{ isExpanded: boolean }>) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "0px",
    visibility: isExpanded ? "visible" : "hidden",
    borderBottomWidth: "1px",
    borderBottomColor: "#F3F3F3",
    gap: "20px",
    padding: "28px 40px",
  }),
});
