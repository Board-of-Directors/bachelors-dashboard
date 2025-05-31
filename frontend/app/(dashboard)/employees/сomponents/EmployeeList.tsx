"use client";

import { getEmployees } from "@/api/request/employees";
import { GetEmployeesResponse } from "@/api/request/employees/types";
import { EmployeeCard } from "@/components/common";
import { GET_EMPLOYEES_KEY } from "@/constants";
import { SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

/** Компонент EmployeeList отображает список сотрудников внутри проекта. */
export const EmployeeList = () => {
  const { data: employees } = useQuery<GetEmployeesResponse, Error>({
    queryKey: GET_EMPLOYEES_KEY,
    queryFn: getEmployees,
  });

  return employees ? (
    <SimpleGrid paddingX="40px" width="100%" columns={3} gap="20px">
      {employees.map((employee) => (
        <EmployeeCard {...employee} key={employee.id} />
      ))}
    </SimpleGrid>
  ) : null;
};
