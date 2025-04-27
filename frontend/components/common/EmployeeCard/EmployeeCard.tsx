"use client";

import { deleteEmployee } from "@/api/request/employees";
import { GET_EMPLOYEES_KEY } from "@/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2Icon } from "lucide-react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Container } from "./EmployeeCard.styles";
import { EmployeeCardProps } from "./EmployeeCard.types";

/** Компонент EmployeeCard отображает карточку сотрудника в проекте. */
export const EmployeeCard = ({ email, id }: EmployeeCardProps) => {
  const queryCient = useQueryClient();

  const { mutate } = useMutation({
    onSuccess: () => queryCient.invalidateQueries({ queryKey: GET_EMPLOYEES_KEY }),
    mutationKey: ["delete", "employee", id],
    mutationFn: () => deleteEmployee(id),
  });

  const handleDelete = () => mutate();

  return (
    <Container>
      <Text>{email}</Text>
      <Button className="min-w-[36px] !w-[36px] !rounded-[4px] bg-background-danger" onClick={handleDelete} size="sm" color="secondary">
        <Trash2Icon className="size-[18px] shrink-0 stroke-indicator-warning" />
      </Button>
    </Container>
  );
};
