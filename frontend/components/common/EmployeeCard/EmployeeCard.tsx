"use client";

import { deleteEmployee } from "@/api/request/employees";
import { GET_EMPLOYEES_KEY } from "@/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2Icon } from "lucide-react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Container } from "./EmployeeCard.styles";
import { EmployeeCardProps } from "./EmployeeCard.types";
import { Actions } from "./Actions";

/** Компонент EmployeeCard отображает карточку сотрудника в проекте. */
export const EmployeeCard = ({ email, id }: EmployeeCardProps) => {
  

  return (
    <Container>
      <Text>{email}</Text>
      <Actions />
    </Container>
  );
};
