import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { AccordionItem } from "./AccordionItem/AccordionItem";
import { EditGroupNameModal } from "./EditGroupNameModal/EditGroupNameModal";
import { StyledAccordion } from "./FolderList.styles";
import { FolderListProps } from "./FolderList.types";
import { ManageAccessModal } from "./ManageAccessModal/ManageAccessModal";

export const FolderList = ({ folders }: FolderListProps) => {
  const [folderName, selectFolderName] = useState<string | undefined>(undefined);
  const [changingFolder, selectChangingFolder] = useState<string | undefined>(undefined);
  const [selectedKeys, setSelectedKeys] = useState<Set<any>>(new Set());

  const {
    onOpen: onOpenManageAccessModal,
    isOpen: isOpenManageAccessModal,
    onOpenChange: onManageAccessModalOpenChange,
  } = useDisclosure();

  const {
    onOpen: onOpenEditGroupNameModal,
    isOpen: isOpenEditGroupNameModal,
    onOpenChange: onOpenEditGroupNameOpenChange,
  } = useDisclosure();

  const handleManageAccessClick = (name: string) => {
    selectFolderName(name);
    onOpenManageAccessModal();
  };

  const handleEditGroupNameClick = (name: string) => {
    selectChangingFolder(name);
    onOpenEditGroupNameModal();
  };

  const handleClickTooltip = (key: number) => {
    let newSelectedKeys;
    const currentIndexSet = new Set([String(key)]);

    if (selectedKeys.has(String(key))) {
      newSelectedKeys = selectedKeys.difference(currentIndexSet);
    } else {
      newSelectedKeys = selectedKeys.union(currentIndexSet);
    }

    setSelectedKeys(newSelectedKeys);
  };

  return (
    <>
      {folderName !== undefined ? (
        <ManageAccessModal
          onOpenChange={onManageAccessModalOpenChange}
          isOpen={isOpenManageAccessModal}
          folderName={folderName}
        />
      ) : null}
      {changingFolder !== undefined ? (
        <EditGroupNameModal
          onOpenChange={onOpenEditGroupNameOpenChange}
          isOpen={isOpenEditGroupNameModal}
          folderName={changingFolder}
        />
      ) : null}
      <StyledAccordion
        className="px-0"
        variant="bordered"
        selectionMode="multiple"
        disableIndicatorAnimation
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => setSelectedKeys(keys as any)}
        dividerProps={{
          className: "h-[2px] bg-button-secondary",
        }}
      >
        {folders.map((folder, key) =>
          AccordionItem({
            onEditGroupNameClick: handleEditGroupNameClick,
            onManageAccessClick: handleManageAccessClick,
            onClickTooltip: () => handleClickTooltip(key),
            folder,
            key,
          }),
        )}
      </StyledAccordion>
    </>
  );
};
