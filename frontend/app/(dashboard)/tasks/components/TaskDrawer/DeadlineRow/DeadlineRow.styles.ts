import { Box, chakra } from "@chakra-ui/react";

const Container = chakra(Box, {
  baseStyle: {
    display: "inline-flex",
    alignItems: "center",
    gap: "16px",
  },
});

const Row = chakra(Container, {
  baseStyle: {
    gap: "12px",
  },
});

const IconContainer = chakra(Box, {
  baseStyle: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "#F3F3F3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
});

const Circle = chakra(Box, {
  baseStyle: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#C7C4C4",
  },
});

export { Container, Row, IconContainer, Circle };