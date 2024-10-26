import { Box, chakra } from "@chakra-ui/react";

export const Container = chakra(Box, {
    baseStyle: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
    }
})