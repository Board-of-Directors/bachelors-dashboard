import { Box, chakra } from "@chakra-ui/react";
import { Block } from "../TaskDrawer.styles";

const MainContainer = chakra(Block, {
  baseStyle: {
    padding: "0px",
    borderBottom: "none",
    gridColumn: "span 3 / span 3",
    gap: "0px"
  }
})

const Container = chakra(Block, {
  baseStyle: {
    borderLeftWidth: "1px",
    borderLeftColor: "#F3F3F3",
    gap: "20px",
    width: "100%"
  },
});

const Row = chakra(Box, {
  baseStyle: {
    display: "inline-flex",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
});

const iconClassName = 'cursor-pointer transition duration-200 hover:text-button-primary text-icon-gray size-[16px]'

export { Container, iconClassName, MainContainer, Row };

