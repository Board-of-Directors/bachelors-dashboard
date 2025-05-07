"use client";

import { FileManager } from "@/components/blocks";
import { useDisclosure } from "@nextui-org/react";
import { Header } from "./components/Header/Header";
import { NewFileModal } from "./components/NewFileModal/NewFileModal";
import { NewTableGroupModal } from "./components/NewTableGroupModal/NewTableGroupModal";

const TablesPage = () => {
  const {
    onOpenChange: onAddGroupOpenChange,
    onOpen: onAddGroupOpen,
    isOpen: isAddGroupOpen,
  } = useDisclosure();

  const {
    onOpenChange: onNewFileModalOpenChange,
    onOpen: onNewFileModalOpen,
    isOpen: isNewFileModalOpen,
  } = useDisclosure();

  return (
    <>
      <NewTableGroupModal onOpenChange={onAddGroupOpenChange} isOpen={isAddGroupOpen} />
      <NewFileModal onOpenChange={onNewFileModalOpenChange} isOpen={isNewFileModalOpen} />
      <Header onNewFileModalOpen={onNewFileModalOpen} onAddGroupOpen={onAddGroupOpen} />
      <FileManager />
    </>
  );
};

export default TablesPage;
