"use client"

import { Box, chakra } from "@chakra-ui/react";

export const Container = chakra(Box, {
  baseStyle: {
    gridTemplateColumns: "repeat(12, 1fr)",
    display: "grid",
    width: "100%",
  },
});
