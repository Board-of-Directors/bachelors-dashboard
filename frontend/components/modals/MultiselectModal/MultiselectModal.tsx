import { Button, ControlledSelect, SelectItem } from "@/components/common";
import { FieldValues, FormProvider, useFieldArray, useForm } from "react-hook-form";
import { Modal } from "../Modal/Modal";
import { MultiselectModalType } from "./MultiselectModal.schema";
import { MultiselectModalProps } from "./MultiselectModal.types";

export const MultiselectModal = ({
  items,
  buttonText,
  selectProps,
  onSubmit,
  children,
  ...props
}: MultiselectModalProps) => {
  const form = useForm<MultiselectModalType>();
  const { remove } = useFieldArray({ name: "items", control: form.control });
  const elements = form.getValues("items") ?? [];

  form.watch();

  const processSubmit = (data: FieldValues) => {
    onSubmit(data);
    props.onOpenChange(false);
  };

  return (
    <FormProvider {...form}>
      <Modal
        {...props}
        body={
          <>
            {children({ elements: elements as SelectItem[], remove })}
            <ControlledSelect
              {...selectProps}
              selectionMode="multiple"
              name={"items"}
              items={items}
            />
          </>
        }
        footer={
          <Button size="xl" onClick={form.handleSubmit(processSubmit)}>
            {buttonText ?? "Добавить"}
          </Button>
        }
      />
    </FormProvider>
  );
};
