import { Box, chakra } from "@chakra-ui/react";

export const Container = chakra(Box, {
    baseStyle: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        paddingY: "20px",
        paddingX: "40px",
        border: "1px 0px 1px 0px",
        borderWidth: "1px",
        borderColor: "button.secondary",
        columnGap: "20px"
    }
})