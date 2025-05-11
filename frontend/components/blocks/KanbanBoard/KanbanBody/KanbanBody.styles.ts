import { Box, chakra } from "@chakra-ui/react";

export const Container = chakra(Box, {
    baseStyle: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        paddingX: "40px",
        gap: "20px"
    }
})