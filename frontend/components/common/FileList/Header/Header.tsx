import { Text } from "@/components/common";
import { HStack } from "@chakra-ui/react";
import { HeaderProps } from "./Header.types";

export const Header = ({ totalAmount }: HeaderProps) => (
  <HStack w="100%" gap="16px" alignItems="baseline">
    <Text className="text-[24px] font-bold">Документы</Text>
    <Text className="text-text-gray">{totalAmount} шт.</Text>
  </HStack>
);
