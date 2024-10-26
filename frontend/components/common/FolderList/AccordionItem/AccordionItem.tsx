import { FolderIcon } from "@/components/icons/FolderIcon";
import { AccordionItem as NextAccordionItem } from "@nextui-org/react";
import { Edit3Icon, Trash2Icon, UsersIcon } from "lucide-react";
import { useEffect, useReducer, useState } from "react";
import { IconButton } from "../../IconButton/IconButton";
import { Text } from "../../Text/Text";
import { Folder } from "../Folder/Folder";
import { Row } from "./AccordionItem.styles";
import { AccordionItemProps } from "./AccordionItem.types";

export const AccordionItem = ({ folder, onManageAccessClick, onEditGroupNameClick, onClickTooltip, key }: AccordionItemProps) => {
  const [isHovered, setHover] = useState<boolean>(false);
  const [isChildHovered, setChildHovered] = useState<boolean>(false);

  const hoverOn = () => setHover(true);
  const hoverOff = () => setHover(false);

  const shouldShowTooltip = isHovered && !isChildHovered;

  return (
    <NextAccordionItem
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      classNames={{
        heading: "px-7 py-3",
      }}
      title={
        <span className={"flex flex-row items-center gap-4"}>
          <FolderIcon />
          <Text className={"text-md font-semibold text-text-back"}>{folder.name}</Text>
        </span>
      }
      indicator={
        shouldShowTooltip ? (
          <Row onClick={onClickTooltip}>
            <IconButton onClick={() => onEditGroupNameClick(folder.name)}>
              <Edit3Icon size={"20px"} className={"text-icon-gray"} />
            </IconButton>
            <IconButton onClick={() => onManageAccessClick(folder.name)}>
              <UsersIcon size={"20px"} className={"text-icon-gray"} />
            </IconButton>
            <IconButton hoverBackground={"#EB6B2E20"}>
              <Trash2Icon size={"20px"} className={"text-indicator-warning"} />
            </IconButton>
          </Row>
        ) : null
      }
      key={key}
    >
      <Folder {...folder} onHover={setChildHovered} />
    </NextAccordionItem>
  );
};
