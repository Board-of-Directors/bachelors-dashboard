import { Box, chakra } from "@chakra-ui/react";
import Link from "next/link";

const FileRow = chakra(Box, {
    baseStyle: {
        width: "100%",
        padding: "20px 20px 20px 64px",
        borderTopColor: 'button.secondary',
        borderTopWidth: "1px",
        position: "relative",

        transition: "background 200ms",

        _hover: {
            background: 'button.secondary'
        }
    }
})

const FileLink = chakra(Link, {
    baseStyle: {
        width: '100%',
        display: "inline-flex",
        alignItems: "center",
        justifyContent: 'space-between',
    }
})

const Row = chakra(Box, {
    baseStyle: {
        display: "inline-flex",
        alignItems: "center",
        gap: "1.5rem"
    }
})

export { FileLink, FileRow, Row };

