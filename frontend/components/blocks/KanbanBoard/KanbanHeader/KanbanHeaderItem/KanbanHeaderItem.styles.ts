import { Box, chakra } from "@chakra-ui/react";

export const Container = chakra(Box, {
    baseStyle: {
        columnSpan: "span 1 / span 1",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
})