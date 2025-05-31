import { Button, Text } from "@/components/common";
import { HStack } from "@chakra-ui/react";
import { GroupIcon, PlusIcon } from "lucide-react";
import { HeaderProps } from "./Header.types";

export const Header = ({ onNewFileModalOpen, onAddGroupOpen }: HeaderProps) => (
  <div className={"w-full items-center justify-between px-10 py-7 flex flex-row gap-3"}>
    <Text className="text-2xl font-bold">Таблицы</Text>
    <HStack gap="8px">
      <Button size={"md"} onClick={onNewFileModalOpen}>
        <Text className={"text-base"}>Новый документ</Text>
        <PlusIcon width={"18px"} />
      </Button>
      <Button color="secondary" onClick={onAddGroupOpen}>
        <Text className={"text-base"}>Новая группа таблиц</Text>
        <GroupIcon width={"18px"} />
      </Button>
    </HStack>
  </div>
);
