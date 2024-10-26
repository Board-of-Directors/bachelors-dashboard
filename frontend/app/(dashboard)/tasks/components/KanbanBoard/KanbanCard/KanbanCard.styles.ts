import { Box, chakra } from "@chakra-ui/react";

const Container = chakra(Box, {
    baseStyle: {
        width: "100%",
        padding: "20px",
        borderRadius: "10px",
        borderWidth: "1px",
        borderColor: "button.secondary",
        display: "flex",
        flexDirection: "column",
        background: "white",
        gap: "16px",
        cursor: "pointer",
        transition: "box-shadow 200ms",
        position: "relative",

        _hover: {
            boxShadow: 'xl',
        }
    }
})

const Row = chakra(Box, {
    baseStyle: {
        display: "inline-flex",
        alignItems: "center",
        gap: "10px"
    }
})

const Circle = chakra(Box, {
    baseStyle: {
        flexShrink: "0px",
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        background: "icon.gray"
    }
})

export { Circle, Container, Row };

