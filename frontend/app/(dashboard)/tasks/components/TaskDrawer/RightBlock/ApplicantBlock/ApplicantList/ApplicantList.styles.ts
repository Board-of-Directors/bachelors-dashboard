import { Box, chakra } from "@chakra-ui/react";

const Container = chakra(Box, {
    baseStyle: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        gap: '20px'
    }
})

const ApplicantRow = chakra(Box, {
    baseStyle: {
        width: '100%',
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
})

const Circle = chakra(Box, {
    baseStyle: {
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        background: "icon.gray",
        flexShrink: 0
    }
})

export { ApplicantRow, Circle, Container };

