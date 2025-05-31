"use client";

import { FormProvider } from "react-hook-form";
import { Button } from "../../Button/Button";
import { ControlledInput } from "../../Input/ControlledInput";
import { Modal } from "../../Modal/Modal";
import { ModalProps } from "../../Modal/Modal.types";
import { Text } from "../../Text/Text";
import { useCreateEmployee } from "./CreateEmployeeModal.hooks";

export const CreateEmployeeModal = ({ onOpenChange, ...props }: ModalProps) => {
  const [methods, onSubmit] = useCreateEmployee(onOpenChange);

  return (
    <FormProvider {...methods}>
      <Modal
        {...props}
        onOpenChange={onOpenChange}
        header={<Text className="font-semibold text-2xl">Новый сотрудник</Text>}
        body={
          <ControlledInput name="email" label="Электронная почта" placeholder="example@gmail.com" />
        }
        footer={
          <Button size="xl" onClick={methods.handleSubmit(onSubmit)}>
            Добавить
          </Button>
        }
      />
    </FormProvider>
  );
};
