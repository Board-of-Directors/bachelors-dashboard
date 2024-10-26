import { ModalProps } from "@/components/common/Modal/Modal.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../Button/Button";
import { ControlledInput } from "../../Input/ControlledInput";
import { Modal } from "../../Modal/Modal";
import { Text } from "../../Text/Text";
import { EditGroupNameModalSchema, EditGroupNameModalType } from "./EditGroupNameModal.schema";

interface EditTableModalProps extends ModalProps {
  folderName: string;
}

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const EditGroupNameModal = ({ folderName, ...props }: EditTableModalProps) => {
  const form = useForm<EditGroupNameModalType>({
    resolver: zodResolver(EditGroupNameModalSchema),
    defaultValues: { name: folderName },
  });

  const handleSubmit = (fieldValues: FieldValues) => {
    alert(fieldValues);
  };

  return (
    <FormProvider {...form}>
      <Modal
        {...props}
        header={
          <Column>
            <Text className="font-semibold text-2xl">Редактировать название</Text>
            <Text className="text-base font-medium text-text-gray">{folderName}</Text>
          </Column>
        }
        body={<ControlledInput name={"name"} label="Название" placeholder="Введите название" />}
        footer={
          <Button size="xl" onClick={handleSubmit}>
            Добавить
          </Button>
        }
      />
    </FormProvider>
  );
};
