import { uploadFile, uploadTable } from "@/api/request/file";
import {
  Button,
  ControlledFileInput,
  ControlledInput,
  ControlledSelect,
  useSnackbar,
} from "@/components/common";
import { GET_ALL_GROUPS_KEY } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { NewFileSchema, NewFileType } from "../schema";
import { FormProps } from "../types";

/**
 * NewTableForm component to handle the creation of a new table.
 * @param {FormProps} props - The props for the form component.
 * @returns {JSX.Element} - The rendered form component.
 */
export const NewTableForm = ({ selectItems, onSuccess }: FormProps) => {
  const queryClient = useQueryClient();
  const form = useForm<NewFileType>({
    resolver: zodResolver(NewFileSchema),
  });

  const { mutate } = useMutation({
    mutationFn: (request: NewFileType) => processUploadFile(request),
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

  const onSubmit = (request: NewFileType) => mutate(request);

  const processUploadFile = ({ file, name, groupId }: NewFileType) =>
    uploadFile(file).then((token) =>
      uploadTable({
        groupId: groupId?.length ? Number(groupId[0].value) : undefined,
        externalId: token,
        name,
      }),
    );

  return (
    <FormProvider {...form}>
      <ControlledInput name={"name"} label="Название" placeholder="Введите название" />
      <ControlledFileInput name={"file"} label="Документ" placeholder="Выберите документ" />
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
