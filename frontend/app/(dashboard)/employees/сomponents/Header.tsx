"use client";

import { getEmployees } from "@/api/request/employees";
import { GetEmployeesResponse } from "@/api/request/employees/types";
import { Button, CreateEmployeeModal, Header as HeaderContainer, Text } from "@/components/common";
import { GET_EMPLOYEES_KEY } from "@/constants";
import { useDisclosure } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";

export const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data } = useQuery<GetEmployeesResponse, Error>({
    queryKey: GET_EMPLOYEES_KEY,
    queryFn: getEmployees,
  });

  return (
    <>
      <CreateEmployeeModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <HeaderContainer
        className={"px-10 py-7"}
        header={"Список сотрудников"}
        helperContent={
          <Text className={"text-base text-text-gray"}>{`Всего ${data?.length ?? 0}`}</Text>
        }
        rightContent={
          <Button size={"md"} onClick={onOpen}>
            <Text className={"text-base"}>Добавить сотрудника</Text>
            <PlusIcon width={"18px"} />
          </Button>
        }
      />
    </>
  );
};
