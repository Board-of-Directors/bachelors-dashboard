import { Box, chakra } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import { Text } from "../Text/Text";

export const Container = chakra(Box, {
  baseStyle: {
    borderColor: "button.secondary",
    borderWidth: "1px",
    flexDirection: "column",
    borderRadius: "10px",
    transition: "all .2s",
    position: "relative",
    cursor: "pointer",
    padding: "28px",
    display: "flex",
    width: "100%",
    gap: "12px",

    _hover: {
      borderColor: "indicator.info",
      animationDuration: "400ms",
    },
  },
});

export const Header = chakra(Text, {
  baseStyle: {
    fontWeight: "semibold",
    fontSize: "24px",
  },
});

export const Row = chakra(Box, {
  baseStyle: {
    flexDirection: "row",
    alignItems: "center",
    color: "text.gray",
    display: "flex",
    width: "100%",
    gap: "12px",
  },
});

export const Bullet = chakra(Box, {
  baseStyle: {
    background: "icon.gray",
    borderRadius: "50%",
    height: "6px",
    width: "6px",
  },
});

export const ArrowIcon = chakra(ArrowRight, {
  baseStyle: {
    position: "absolute",
    right: "28px",
    top: "42%",
  },
});
