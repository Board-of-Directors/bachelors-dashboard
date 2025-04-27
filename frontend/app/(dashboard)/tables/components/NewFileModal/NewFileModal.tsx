import { uploadFile } from "@/api/request/file";
import {
  Button,
  ControlledFileInput,
  ControlledInput,
  Modal,
  ModalProps,
  Text,
} from "@/components/common";
import { Spinner } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FileModalSchema, FileModalType } from "./FileModalSchema";

export const NewFileModal = (props: ModalProps) => {
  const form = useForm<FileModalType>({
    resolver: zodResolver(FileModalSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = ({ file }: FieldValues) => {
    uploadFile(file);
  };

  return (
    <FormProvider {...form}>
      <Modal
        {...props}
        header={<Text className="font-semibold text-2xl">Новый документ</Text>}
        body={
          <>
            <ControlledInput name={"name"} label="Название" placeholder="Введите название" />
            <ControlledFileInput name={"file"} label="Документ" placeholder="Выберите документ" />
          </>
        }
        footer={
          <Button disabled={isSubmitting} size="xl" onClick={form.handleSubmit(onSubmit, console.log)}>
            {isSubmitting ? <Spinner size="sm" background="white" /> : null}
            Добавить
          </Button>
        }
      />
    </FormProvider>
  );
};
