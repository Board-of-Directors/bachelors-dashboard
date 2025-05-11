import { Box, chakra } from "@chakra-ui/react";

const Container = chakra(Box, {
    baseStyle: {
        width: '100%',
        display: 'flex',
        flexDirection: "column",
        gap: "20px",
        padding: "28px 20px 28px 40px",
        borderBottomWidth: '1px',
        borderBottomColor: "button.secondary"
    }
})

const Grid = chakra(Box, {
    baseStyle: {
        display: "grid",
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: "20px",
        width: "100%"
    }
})

export { Container, Grid };
