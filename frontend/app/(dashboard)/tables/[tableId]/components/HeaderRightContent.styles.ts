import { Box, chakra } from "@chakra-ui/react";

export const Container = chakra(Box, {
    baseStyle: {
        width: "100%",
        display: "inline-flex",
        gap: "20px",
    },
});
