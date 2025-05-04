import { uploadTable } from "@/api/request/file";
import { Button, ControlledFileInput, ControlledSelect, useSnackbar } from "@/components/common";
import { GET_ALL_GROUPS_KEY } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { FormProps } from "../types";
import { NewTableSchema, NewTableType } from "./NewTableForm.schema";

/**
 * NewTableForm component to handle the creation of a new table.
 * @param {FormProps} props - The props for the form component.
 * @returns {JSX.Element} - The rendered form component.
 */
export const NewTableForm = ({ selectItems, onSuccess }: FormProps) => {
  const queryClient = useQueryClient();
  const form = useForm<NewTableType>({
    resolver: zodResolver(NewTableSchema),
  });

  const { mutate } = useMutation({
    mutationFn: (file: File) => uploadTable(file),
    mutationKey: ["post", "table"],
    onSuccess: () => handleSuccess(),
  });

  const successSnackbar = useSnackbar({
    description: "Вы можете увидеть ее в группе таблиц",
    header: "Таблица успешно создана",
    variant: "success",
  });

  const errorSnackbar = useSnackbar({
    description: "Обновите страницу и попробуйте снова",
    header: "Упс! Произошла ошибка",
    variant: "danger",
  });

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: GET_ALL_GROUPS_KEY });
    successSnackbar();
    onSuccess();
  };

  const onSubmit = ({ table }: NewTableType) => mutate(table);

  return (
    <FormProvider {...form}>
      <ControlledFileInput name={"table"} label="Документ" placeholder="Выберите документ" />
      <ControlledSelect
        placeholder="Выберите группу"
        items={selectItems}
        name="groupId"
        label="Группа"
      />
      <Button
        onClick={form.handleSubmit(onSubmit, errorSnackbar)}
        isSubmitting={form.formState.isSubmitting}
        size="xl"
      >
        Добавить
      </Button>
    </FormProvider>
  );
};
