"use client";

import { Text } from "@/components/common/Text/Text";
import { DOCXFileIcon } from "@/components/icons/DOCXFileIcon";
import { XSLXFileIcon } from "@/components/icons/XSLXFileIcon";
import { useDisclosure } from "@nextui-org/react";
import { Edit3Icon, Trash2Icon, UsersIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useHover } from "usehooks-ts";
import { IconButton } from "../../../IconButton/IconButton";
import { EditTableModal } from "./EditTableModal/EditTableModal";
import { FileLink, FileRow, Row } from "./FolderItem.styles";
import { DOCXFile, FileItem, FolderItemProps, XSLXFile } from "./FolderItem.types";
import Link from "next/link";

export const FolderItem = ({ file, onHover }: FolderItemProps) => {
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

  useEffect(() => {
    onHover(isHover);
  }, [isHover, onHover]);

  return (
    <>
      {tableToEdit ? (
        <EditTableModal
          table={tableToEdit}
          onOpenChange={onEditGroupOpenChange}
          isOpen={isEditGroupOpen}
        />
      ) : null}
      <FileRow ref={hoverRef}>
        <FileLink href={href}>
          <Row>
            {(file as DOCXFile)?.href ? <DOCXFileIcon /> : <XSLXFileIcon />}
            <Text className={"text-md font-semibold text-text-back"}>{file.name}</Text>
          </Row>
          {isHover ? (
            <Row>
              <IconButton onClick={handleOpenEditModal}>
                <Edit3Icon size={"20px"} className={"text-icon-gray"} />
              </IconButton>
              <IconButton>
                <UsersIcon size={"20px"} className={"text-icon-gray"} />
              </IconButton>
              <IconButton hoverBackground={"#EB6B2E20"}>
                <Trash2Icon size={"20px"} className={"text-indicator-warning"} />
              </IconButton>
            </Row>
          ) : null}
        </FileLink>
      </FileRow>
    </>
  );
};
