"use client";

import { FolderIcon } from "@/components/icons/FolderIcon";
import {
  AccordionIcon,
  Box,
  AccordionButton as ChakraAccordionButton,
  HStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Text } from "../../Text/Text";
import { SettingsTooltip } from "../SettingTooltip/SettingsTooltip";
import { AccordionButtonProps } from "./AccordionButton.types";

export const AccordionButton = ({
  onEditGroupNameClick,
  onManageAccessClick,
  name,
}: AccordionButtonProps) => {
  const [isHovered, setHover] = useState<boolean>(false);

  const hoverOn = () => setHover(true);
  const hoverOff = () => setHover(false);

  return (
    <ChakraAccordionButton onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
      <HStack gap="1rem">
        <FolderIcon />
        <Text className={"text-md font-semibold text-text-back"}>{name}</Text>
      </HStack>
      <Box display={"inline-flex"} alignItems={"center"} gap={"20px"}>
        {isHovered ? (
          <SettingsTooltip
            onEdit={() => onEditGroupNameClick(name)}
            onManageAccess={() => onManageAccessClick(name)}
            onDelete={() => {}}
          />
        ) : null}
        <AccordionIcon>
          <ChevronDownIcon />
        </AccordionIcon>
      </Box>
    </ChakraAccordionButton>
  );
};
