"use client";

import { deleteEmployee } from "@/api/request/employees";
import { GET_EMPLOYEES_KEY } from "@/constants";
import { HStack } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import { Button } from "../Button/Button";
import { EmployeeCardProps } from "./EmployeeCard.types";

export const Actions = ({ id }: Pick<EmployeeCardProps, "id">) => {
  const queryCient = useQueryClient();

  const { mutate } = useMutation({
    onSuccess: () => queryCient.invalidateQueries({ queryKey: GET_EMPLOYEES_KEY }),
    mutationKey: ["delete", "employee", id],
    mutationFn: () => deleteEmployee(id),
  });

  const handleDelete = () => mutate();
  const handleEdit = () => {};

  return (
    <HStack gap="12px">
      <Button
        className="min-w-[36px] !w-[36px] !rounded-[4px] bg-background-danger"
        onClick={handleDelete}
        color="secondary"
        size="sm"
      >
        <Trash2Icon className="size-[18px] shrink-0 stroke-indicator-warning" />
      </Button>
      <Button
        className="min-w-[36px] !w-[36px] !rounded-[4px] bg-background-neutral"
        onClick={handleEdit}
        color="secondary"
        size="sm"
      >
        <Edit2Icon className="size-[18px] shrink-0 stroke-icon-gray" />
      </Button>
    </HStack>
  );
};
