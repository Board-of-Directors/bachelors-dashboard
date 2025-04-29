import { GetAllGroupsResponse } from "@/api/request/group/types";
import { Button, Header as HeaderContainer, Text } from "@/components/common";
import { GET_ALL_GROUPS_KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { GroupIcon, PlusIcon, TableIcon } from "lucide-react";
import { HeaderProps } from "./Header.types";

export const Header = ({
  onNewTableModalOpen,
  onNewFileModalOpen,
  onAddGroupOpen,
}: HeaderProps) => {
  const { data } = useQuery<GetAllGroupsResponse, Error>({ queryKey: GET_ALL_GROUPS_KEY });

  return (
    <HeaderContainer
      className={"px-10 py-7"}
      header={"Таблицы"}
      helperContent={
        <Text className={"text-base text-text-gray"}>{`Всего ${data?.count ?? 0} шт.`}</Text>
      }
      rightContent={
        <div className={"flex flex-row gap-3"}>
          <Button size={"md"} onClick={onNewFileModalOpen}>
            <Text className={"text-base"}>Новый документ</Text>
            <PlusIcon width={"18px"} />
          </Button>
          <Button color="secondary" size={"md"} onClick={onNewTableModalOpen}>
            <Text className={"text-base"}>Новая таблица</Text>
            <TableIcon width={"18px"} />
          </Button>
          <Button color="secondary" onClick={onAddGroupOpen}>
            <Text className={"text-base"}>Новая группа таблиц</Text>
            <GroupIcon width={"18px"} />
          </Button>
        </div>
      }
    />
  );
};
