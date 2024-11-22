import { chakra } from "@chakra-ui/react";
import { Text } from "../Text/Text";

export const TextButton = chakra(Text, {
  baseStyle: {
    color: "text.gray",
    cursor: "pointer",
    transition: "color 0.3s",

    _hover: {
      color: "indicator.info",
    },
  },
});
