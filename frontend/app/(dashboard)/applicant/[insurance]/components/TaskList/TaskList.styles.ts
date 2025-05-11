import { Box, chakra } from "@chakra-ui/react";

const Container = chakra(Box, {
    baseStyle: {
        gridColumn: "span 4 / span 4",
        padding: "28px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
    }
})

const Header = chakra(Box, {
    baseStyle: {
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
})

const LeftContent = chakra(Box, {
    baseStyle: {
        display: "inline-flex",
        alignItems: "baseline",
        gap: "12px"
    }
})

export { Container, Header, LeftContent };
