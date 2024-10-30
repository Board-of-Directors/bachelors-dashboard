"use client";

import { Text } from "@/components/common/Text/Text";
import { DOCXFileIcon } from "@/components/icons/DOCXFileIcon";
import { XSLXFileIcon } from "@/components/icons/XSLXFileIcon";
import { useDisclosure } from "@nextui-org/react";
import { useRef, useState } from "react";
import { useHover } from "usehooks-ts";
import { EditTableModal } from "../../Modals";
import { SettingsTooltip } from "../SettingTooltip/SettingsTooltip";
import { FileRow as Container, FileLink, Row } from "./FileRow.styles";
import { DOCXFile, FileItem, FileRowProps, XSLXFile } from "./FileRow.types";

export const FileRow = ({ file }: FileRowProps) => {
  const [tableToEdit, setTableToEdit] = useState<FileItem | null>(null);
  const hoverRef = useRef<HTMLLIElement>(null);
  const isHover = useHover(hoverRef);

  const {
    onOpen: onEditGroupOpen,
    isOpen: isEditGroupOpen,
    onOpenChange: onEditGroupOpenChange,
  } = useDisclosure();

  const tableHref = `tables/${(file as XSLXFile)?.tableId}`;
  const href = (file as DOCXFile)?.href || tableHref;

  const handleOpenEditModal = () => {
    setTableToEdit(file);
    onEditGroupOpen();
  };

  return (
    <>
      {tableToEdit ? (
        <EditTableModal
          onOpenChange={onEditGroupOpenChange}
          isOpen={isEditGroupOpen}
          name={tableToEdit.name}
        />
      ) : null}
      <Container ref={hoverRef}>
        <FileLink href={href}>
          <Row>
            {(file as DOCXFile)?.href ? <DOCXFileIcon /> : <XSLXFileIcon />}
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
