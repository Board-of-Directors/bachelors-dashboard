import { BaseStyleWithProps } from "@/types/utils";
import { chakra, HStack, Icon, Text, VStack } from "@chakra-ui/react";

export const Container = chakra(VStack, {
  baseStyle: {
    borderRadius: "10px",
    alignItems: "start",
    minWidth: "400px",
    padding: "20px",
    gap: "8px",
  },
});

export const Header = chakra(HStack, {
  baseStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

export const IconContainer = chakra<typeof Icon, { iconColor: string }>(Icon, {
  baseStyle: ({ iconColor }: BaseStyleWithProps<{ iconColor: string }>) => ({
    width: "24px",
    height: "24px",

    "& > svg > *": {
      color: iconColor,
    },
  }),
});

export const Title = chakra(Text, {
  baseStyle: {
    fontSize: "20px",
    fontWeight: "semibold",
  },
});

export const Description = chakra(Text, {
  baseStyle: {
    fontSize: "16px",
  },
});
