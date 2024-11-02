import { FormProvider } from "react-hook-form";
import { Column } from "./EditGroupNameModal.styles";
import { EditTableModalProps } from "./EditGroupNameModal.types";

import { Button, ControlledInput, Modal, Text } from "@/components/common";
import { useEditGroupNameModal } from "./EditGroupNameModal.hooks";

export const EditGroupNameModal = ({ folder, ...props }: EditTableModalProps) => {
  const { form, onSubmit } = useEditGroupNameModal({ folder, onOpenChange: props.onOpenChange });

  return (
    <FormProvider {...form}>
      <Modal
        {...props}
        header={
          <Column>
            <Text className="font-semibold text-2xl">Редактировать название</Text>
            <Text className="text-base font-medium text-text-gray">{folder.name}</Text>
          </Column>
        }
        body={<ControlledInput name={"name"} label="Название" placeholder="Введите название" />}
        footer={
          <Button size="xl" onClick={form.handleSubmit(onSubmit)}>
            Редактировать
          </Button>
        }
      />
    </FormProvider>
  );
};
