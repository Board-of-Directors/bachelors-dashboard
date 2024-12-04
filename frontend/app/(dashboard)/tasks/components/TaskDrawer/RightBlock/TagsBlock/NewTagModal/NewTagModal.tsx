import { Button, ControlledInput, ControlledSelect, Modal, Text } from "@/components/common";
import { SelectSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { colors } from "./NewTagModal.data";
import { NewTagModalProps } from "./NewTagModal.types";

export const NewTagModal = ({ onAddTag, ...props }: NewTagModalProps) => {
  const form = useForm<typeof SelectSchema>({
    resolver: zodResolver(SelectSchema),
  });

  const onSubmit = (fieldValues: FieldValues) => {
    const colors = fieldValues.value[0].value;
    onAddTag({ ...fieldValues, value: colors });
    props.onOpenChange(false);
  };

  return (
    <FormProvider {...form}>
      <Modal
        {...props}
        header={<Text className="font-semibold text-2xl">Новый документ</Text>}
        body={
          <>
            <ControlledInput name={"label"} label="Название тега" placeholder="Введите название" />
            <ControlledSelect
              placeholder="Выберите цвет"
              label="Цвет тега"
              name={"value"}
              items={colors}
            />
          </>
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
