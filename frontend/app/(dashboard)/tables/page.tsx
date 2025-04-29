"use client";

import { FileList } from "@/components/blocks";
import { Accordion } from "@/components/common/Accordion/Accordion";
import { useDisclosure } from "@nextui-org/react";
import { Header } from "./components/Header/Header";
import { NewFileModal } from "./components/NewFileModal/NewFileModal";
import { NewTableGroupModal } from "./components/NewTableGroupModal/NewTableGroupModal";
import { NewTableModal } from "./components/NewTableModal/NewTableModal";

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

  const {
    onOpenChange: onNewTableModalOpenChange,
    onOpen: onNewTableModalOpen,
    isOpen: isNewTableModalOpen,
  } = useDisclosure();

  return (
    <>
      <NewTableGroupModal onOpenChange={onAddGroupOpenChange} isOpen={isAddGroupOpen} />
      <NewTableModal onOpenChange={onNewTableModalOpenChange} isOpen={isNewTableModalOpen} />
      <NewFileModal onOpenChange={onNewFileModalOpenChange} isOpen={isNewFileModalOpen} />
      <Header
        onNewTableModalOpen={onNewTableModalOpen}
        onNewFileModalOpen={onNewFileModalOpen}
        onAddGroupOpen={onAddGroupOpen}
      />
      <Accordion mx="40px" />
      <FileList />
    </>
  );
};

export default TablesPage;
