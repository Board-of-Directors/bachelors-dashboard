"use client";

import { Button, Header, Text } from "@/components/common";
import { Accordion } from "@/components/common/Accordion/Accordion";
import { mockFolders } from "@/components/common/Accordion/Accordion.mocks";
import { useDisclosure } from "@nextui-org/react";
import { GroupIcon, PlusIcon } from "lucide-react";
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
      <Header
        className={"px-10 py-7"}
        header={"Таблицы"}
        helperContent={<Text className={"text-base text-text-gray"}>Всего 6 шт.</Text>}
        rightContent={
          <div className={"flex flex-row gap-3"}>
            <Button size={"md"} onClick={onNewFileModalOpen}>
              <Text className={"text-base"}>Новый документ</Text>
              <PlusIcon width={"18px"} />
            </Button>
            <Button color="secondary" onClick={onAddGroupOpen}>
              <Text className={"text-base"}>Новая группа таблиц</Text>
              <GroupIcon width={"18px"} />
            </Button>
          </div>
        }
      />
      <Accordion mx="40px" folders={mockFolders} />
    </>
  );
};

export default TablesPage;
