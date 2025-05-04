import { uploadDocument, uploadFile } from "@/api/request/file";
import {
  Button,
  ControlledFileInput,
  ControlledInput,
  ControlledSelect,
  useSnackbar,
} from "@/components/common";
import { GET_GROUP_FILES_KEY } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { FormProps } from "../types";
import { NewFileSchema, NewFileType } from "./NewFileForm.schema";

export const NewFileForm = ({ selectItems, onSuccess }: FormProps) => {
  const queryClient = useQueryClient();
  const form = useForm<NewFileType>({
    resolver: zodResolver(NewFileSchema),
  });

  const { mutate } = useMutation({
    mutationFn: (requestData: NewFileType) => processUploadFile(requestData),
    mutationKey: ["post", "file"],
    onSuccess: () => handleSuccess(),
  });

  const successSnackbar = useSnackbar({
    header: "Файл успешно загружен!",
    variant: "success",
  });

  const errorSnackbar = useSnackbar({
    description: "Обновите страницу и попробуйте снова",
    header: "Упс! Произошла ошибка",
    variant: "danger",
  });

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [GET_GROUP_FILES_KEY, "standalone"] });
    successSnackbar();
    onSuccess();
  };

  const processUploadFile = ({ file, name }: NewFileType) =>
    uploadFile(file).then((token) =>
      uploadDocument({ externalId: token, name: name, groupId: undefined }),
    );

  const onSubmit = (requestData: NewFileType) => mutate(requestData);

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
