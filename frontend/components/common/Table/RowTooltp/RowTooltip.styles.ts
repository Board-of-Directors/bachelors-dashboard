import { chakra, Box } from "@chakra-ui/react";

export const Container = chakra(Box, {
    baseStyle : {
        display : "flex",
        flexDirection : "column",
        width : "100%"
    }
});