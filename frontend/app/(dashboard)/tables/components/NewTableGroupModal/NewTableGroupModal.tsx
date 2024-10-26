import { Button, ControlledInput, Modal, ModalProps, Text } from "@/components/common";
import { TabelGroupModalType, TableGroupModalSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

export const NewTableGroupModal = (props: ModalProps) => {
  const form = useForm<TabelGroupModalType>({
    resolver: zodResolver(TableGroupModalSchema),
  });

  const handleSubmit = (fieldValues: FieldValues) => {
    alert(fieldValues);
  };

  return (
    <FormProvider {...form}>
      <Modal
        {...props}
        header={<Text className="font-semibold text-2xl">Новая группа таблиц</Text>}
        body={
          <ControlledInput name={"groupName"} label="Название" placeholder="Введите название" />
        }
        footer={
          <Button size="xl" onClick={handleSubmit}>
            Добавить
          </Button>
        }
      />
    </FormProvider>
  );
};
