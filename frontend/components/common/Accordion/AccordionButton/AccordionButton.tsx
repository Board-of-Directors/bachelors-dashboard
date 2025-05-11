"use client";

import { FolderIcon } from "@/components/icons/FolderIcon";
import {
  AccordionIcon,
  Box,
  AccordionButton as ChakraAccordionButton,
  HStack,
  useBoolean,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";
import { SettingsTooltip } from "../SettingTooltip/SettingsTooltip";
import { useAccordionButton } from "./AccordionButton.hooks";
import { AccordionButtonProps } from "./AccordionButton.types";

import { Text } from "@/components/common";
import { EditGroupNameModal, ManageAccessModal } from "@/components/modals";

export const AccordionButton = ({ folder }: AccordionButtonProps) => {
  const { actions, editGroupModalProps, manageAccessModalProps } = useAccordionButton(folder.id);
  const { handleDeleteGroup, onOpenEditGroupNameModal, onOpenManageAccessModal } = actions;
  const [isHovered, { on, off }] = useBoolean(false);

  return (
    <>
      <ManageAccessModal {...manageAccessModalProps} folder={folder} />
      <EditGroupNameModal {...editGroupModalProps} folder={folder} />
      <ChakraAccordionButton onMouseEnter={on} onMouseLeave={off}>
        <HStack gap="1rem">
          <FolderIcon />
          <Text className={"text-md font-semibold text-text-back"}>{folder.name}</Text>
        </HStack>
        <Box display={"inline-flex"} alignItems={"center"} gap={"20px"}>
          {isHovered ? (
            <SettingsTooltip
              onManageAccess={onOpenManageAccessModal}
              onEdit={onOpenEditGroupNameModal}
              onDelete={handleDeleteGroup}
            />
          ) : null}
          <AccordionIcon>
            <ChevronDownIcon />
          </AccordionIcon>
        </Box>
      </ChakraAccordionButton>
    </>
  );
};
