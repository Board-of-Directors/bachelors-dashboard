import { Box, chakra } from "@chakra-ui/react";

export const Column = chakra(Box, {
    baseStyle: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    }
})