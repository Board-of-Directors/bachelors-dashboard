import { HStack } from "@chakra-ui/react";
import { Edit3Icon, Trash2Icon, UsersIcon } from "lucide-react";
import { IconButton } from "../../IconButton/IconButton";
import { SettingsTooltipProps } from "./SettingsTooltip.types";

export const SettingsTooltip = ({ onDelete, onEdit, onManageAccess }: SettingsTooltipProps) => (
  <HStack gap="1rem" onClick={(e) => e.stopPropagation()}>
    <IconButton onClick={onEdit}>
      <Edit3Icon size={"20px"} className={"text-icon-gray"} />
    </IconButton>
    <IconButton onClick={onManageAccess}>
      <UsersIcon size={"20px"} className={"text-icon-gray"} />
    </IconButton>
    <IconButton onClick={onDelete} hoverBackground={"#EB6B2E20"}>
      <Trash2Icon size={"20px"} className={"text-indicator-warning"} />
    </IconButton>
  </HStack>
);
