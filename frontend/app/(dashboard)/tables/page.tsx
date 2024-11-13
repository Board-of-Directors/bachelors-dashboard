"use client";

import { Accordion } from "@/components/common/Accordion/Accordion";
import { useDisclosure } from "@nextui-org/react";
import { Header } from "./components/Header/Header";
import { NewFileModal } from "./components/NewFileModal/NewFileModal";
import { NewTableGroupModal } from "./components/NewTableGroupModal/NewTableGroupModal";

const TablesPage = () => {
    const {
        onOpen: onAddGroupOpen,
        isOpen: isAddGroupOpen,
        onOpenChange: onAddGroupOpenChange,
    } = useDisclosure();

    const {
        onOpen: onNewFileModalOpen,
        isOpen: isNewFileModalOpen,
        onOpenChange: onNewFileModalOpenChange,
    } = useDisclosure();

    return (
        <>
            <NewTableGroupModal onOpenChange={onAddGroupOpenChange} isOpen={isAddGroupOpen} />
            <NewFileModal onOpenChange={onNewFileModalOpenChange} isOpen={isNewFileModalOpen} />
            <Header onAddGroupOpen={onAddGroupOpen} onNewFileModalOpen={onNewFileModalOpen} />
            <Accordion mx="40px" />
        </>
    );
};

export default TablesPage;
