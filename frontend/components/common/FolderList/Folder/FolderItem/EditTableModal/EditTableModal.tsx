import { ModalProps } from "@/components/common/Modal/Modal.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import {
  TabelGroupModalType,
  TableGroupModalSchema,
} from "../../../../../../schemas/TableGroupSchema/TableGroupModal.schema";
import { Button } from "../../../../Button/Button";
import { ControlledInput } from "../../../../Input/ControlledInput";
import { Modal } from "../../../../Modal/Modal";
import { Text } from "../../../../Text/Text";
import { FileItem } from "../FolderItem.types";

interface EditTableModalProps extends ModalProps {
  table: FileItem;
}

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const EditTableModal = ({ table, ...props }: EditTableModalProps) => {
  const form = useForm<TabelGroupModalType>({
    resolver: zodResolver(TableGroupModalSchema),
    defaultValues: { name: table.name },
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
            <Text className="text-base font-medium text-text-gray">{table.name}</Text>
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
