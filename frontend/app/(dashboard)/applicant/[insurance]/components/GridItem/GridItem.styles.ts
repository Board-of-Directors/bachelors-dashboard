import { Box, chakra } from "@chakra-ui/react";

export const Container = chakra(Box, {
    baseStyle: {
        padding: "20px",
        borderRadius: "10px",
        gridColumn: "span 1 / span 1",
        background: "#F9F9F9",
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    }
});