"use client";

import { Text } from "@/components/common/Text/Text";
import { DOCXFileIcon } from "@/components/icons/DOCXFileIcon";
import { XSLXFileIcon } from "@/components/icons/XSLXFileIcon";
import { EditTableModal } from "../../Modals";
import { SettingsTooltip } from "../SettingTooltip/SettingsTooltip";
import { FileRow as Container, FileLink, Row } from "./FileRow.styles";
import { DOCXFile, FileRowProps } from "./FileRow.types";

import { MenuIcon } from "lucide-react";
import { useFileRow } from "./FileRow.hooks";

export const FileRow = ({ file }: FileRowProps) => {
  const {
    disclosure: { isEditGroupOpen, onEditGroupOpenChange },
    draggable: { attributes, listeners, style },
    handleOpenEditModal,
    tableToEdit,
    isHover,
    refs,
    href,
  } = useFileRow(file);

  return (
    <>
      {tableToEdit ? (
        <EditTableModal
          onOpenChange={onEditGroupOpenChange}
          isOpen={isEditGroupOpen}
          name={tableToEdit.name}
        />
      ) : null}
      <Container ref={refs} style={style} {...attributes}>
        {isHover ? (
          <MenuIcon
            className="absolute left-7 top-[32px] size-[18px] text-text-gray cursor-grabbing"
            {...listeners}
          />
        ) : null}
        <FileLink href={href}>
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
        </FileLink>
      </Container>
    </>
  );
};
