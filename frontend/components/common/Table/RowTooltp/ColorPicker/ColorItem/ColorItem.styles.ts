import { BaseStyleWithProps, Color } from "@/types/utils";
import { Box, chakra } from "@chakra-ui/react";

export const Container = chakra<typeof Box, { color: Color }>(Box, {
  baseStyle: ({ color }: BaseStyleWithProps<{ color: Color }>) => ({
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "3px",
    background: color,
    cursor: "pointer",
  }),
});
