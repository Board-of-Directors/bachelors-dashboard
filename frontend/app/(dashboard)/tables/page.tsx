"use client";

import { Text } from "@/components/common";
import { Accordion } from "@/components/common/Accordion/Accordion";
import { useDisclosure } from "@nextui-org/react";
import { useFlag } from "@unleash/proxy-client-react";
import { Header } from "./components/Header/Header";
import { NewFileModal } from "./components/NewFileModal/NewFileModal";
import { NewTableGroupModal } from "./components/NewTableGroupModal/NewTableGroupModal";

const TablesPage = () => {
  const {
    onOpen: onAddGroupOpen,
    isOpen: isAddGroupOpen,
    onOpenChange: onAddGroupOpenChange,
  } = useDisclosure();

  const acrrodionEnabled = useFlag("accordion_enabled");
  const headerEnabled = useFlag("header_enabled");

  const {
    onOpen: onNewFileModalOpen,
    isOpen: isNewFileModalOpen,
    onOpenChange: onNewFileModalOpenChange,
  } = useDisclosure();

  return (
    <>
      <NewTableGroupModal onOpenChange={onAddGroupOpenChange} isOpen={isAddGroupOpen} />
      <NewFileModal onOpenChange={onNewFileModalOpenChange} isOpen={isNewFileModalOpen} />
      {headerEnabled ? (
        <Header onAddGroupOpen={onAddGroupOpen} onNewFileModalOpen={onNewFileModalOpen} />
      ) : (
        <Text>Включите флаг header_enabled!</Text>
      )}
      {acrrodionEnabled ? <Accordion mx="40px" /> : <Text>Включите флаг accordion_enabled</Text>}
    </>
  );
};

export default TablesPage;
