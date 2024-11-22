import { Button, ControlledInput, Modal, Text } from "@/components/common";
import { VStack } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";
import { useEditTableModal } from "./EditTableModal.hooks";
import { EditTableModalProps } from "./EditTableModal.types";

export const EditTableModal = ({ name, ...props }: EditTableModalProps) => {
  const { form, onSubmit } = useEditTableModal(name);

  return (
    <FormProvider {...form}>
      <Modal
        {...props}
        header={
          <VStack gap="4px">
            <Text className="font-semibold text-2xl">Редактировать название</Text>
            <Text className="text-base font-medium text-text-gray">{name}</Text>
          </VStack>
        }
        body={<ControlledInput name={"name"} label="Название" placeholder="Введите название" />}
        footer={
          <Button size="xl" onClick={form.handleSubmit(onSubmit)}>
            Добавить
          </Button>
        }
      />
    </FormProvider>
  );
};
