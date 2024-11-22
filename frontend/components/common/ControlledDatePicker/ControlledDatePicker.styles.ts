import { Box, chakra } from "@chakra-ui/react";

const Row = chakra(Box, {
    baseStyle: {
        gap: "12px",
        alignItems: "center",
        display: 'inline-flex'
    },
});

const iconClassName = 'cursor-pointer transition duration-200 hover:text-button-primary text-icon-gray size-[16px]'

export { iconClassName, Row };
