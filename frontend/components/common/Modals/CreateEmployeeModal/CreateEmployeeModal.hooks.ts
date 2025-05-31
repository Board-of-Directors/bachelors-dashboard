import { createEmployee } from "@/api/request/employees";
import { GET_EMPLOYEES_KEY } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { CreateEmployeeSchema, CreateEmployeeType } from "./CreateEmployeeModal.schema";

export const useCreateEmployee = (onOpenChange: (isOpen: boolean) => void) => {
  const queryClient = useQueryClient();
  const methods = useForm<CreateEmployeeType>({
    resolver: zodResolver(CreateEmployeeSchema),
    mode: "onChange",
  });

  const { mutate } = useMutation({
    mutationFn: ({ email }: CreateEmployeeType) => createEmployee(email),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: GET_EMPLOYEES_KEY });
      onOpenChange(false);
    },
  });

  const onSubmit = (fieldValues: CreateEmployeeType) => mutate(fieldValues);

  return [methods, onSubmit] as const;
};
