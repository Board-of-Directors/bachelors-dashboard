import { Button, ControlledInput, Modal, ModalProps, Text } from "@/components/common";
import { FormProvider } from "react-hook-form";
import { useNewTableGroupModal } from "./NewTableGroupModal.hooks";

export const NewTableGroupModal = (props: ModalProps) => {
  const { form, onSubmit } = useNewTableGroupModal(props);

  return (
    <FormProvider {...form}>
      <Modal
        {...props}
        header={<Text className="font-semibold text-2xl">Новая группа таблиц</Text>}
        body={
          <ControlledInput name={"name"} label="Название" placeholder="Введите название" />
        }
        footer={
          <Button size="xl" onClick={form.handleSubmit(onSubmit)}>
            Добавить
          </Button>
        }
      />
    </FormProvider>
  );
};
