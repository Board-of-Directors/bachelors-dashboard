"use client";

import { Text } from "@/components/common/Text/Text";
import { DOCXFileIcon } from "@/components/icons/DOCXFileIcon";
import { XSLXFileIcon } from "@/components/icons/XSLXFileIcon";
import { EditTableModal } from "@/components/modals";
import { SettingsTooltip } from "../SettingTooltip/SettingsTooltip";
import { FileRow as Container, FileContainer, Row } from "./FileRow.styles";
import { FileRowProps } from "./FileRow.types";

import { MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFileRow } from "./FileRow.hooks";

export const FileRow = ({ file, borderTopWidth }: FileRowProps) => {
  const {
    disclosure: { isEditGroupOpen, onEditGroupOpenChange },
    draggable: { attributes, listeners, style },
    handleOpenEditModal,
    tableToEdit,
    isHover,
    refs,
    href,
  } = useFileRow(file);

  const router = useRouter();
  const handleClick = () => router.push(href);

  return (
    <>
      {tableToEdit ? (
        <EditTableModal
          onOpenChange={onEditGroupOpenChange}
          isOpen={isEditGroupOpen}
          name={tableToEdit.name}
        />
      ) : null}
      <Container ref={refs} style={style} borderTopWidth={borderTopWidth} {...attributes}>
        {isHover ? (
          <MenuIcon
            className="absolute left-7 top-[32px] size-[18px] text-text-gray cursor-grabbing"
            {...listeners}
          />
        ) : null}
        <FileContainer onClick={handleClick}>
          <Row>
            {(file as any)?.href ? <DOCXFileIcon /> : <XSLXFileIcon />}
            <Text className={"text-md font-semibold text-text-back"}>{file.name}</Text>
          </Row>
          {isHover ? (
            <SettingsTooltip
              onEdit={handleOpenEditModal}
              onManageAccess={() => {}}
              onDelete={() => {}}
            />
          ) : null}
        </FileContainer>
      </Container>
    </>
  );
};
