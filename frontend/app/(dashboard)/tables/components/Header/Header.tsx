import { useCredentials } from "@/api/request/auth/types";
import { GetAllGroupsResponse } from "@/api/request/group/types";
import { Button, Text } from "@/components/common";
import { GET_ALL_GROUPS_KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { GroupIcon, PlusIcon } from "lucide-react";
import { HeaderProps } from "./Header.types";

export const Header = ({ onNewFileModalOpen, onAddGroupOpen }: HeaderProps) => {
  const { role } = useCredentials();

  if (role !== "ADMIN") {
    return null;
  }

  return (
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
  );
};
