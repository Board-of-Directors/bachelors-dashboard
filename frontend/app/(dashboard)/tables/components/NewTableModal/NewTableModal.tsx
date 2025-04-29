import { uploadTable } from "@/api/request/file";
import { Button, ControlledFileInput, Modal, ModalProps, Text } from "@/components/common";
import { GET_ALL_GROUPS_KEY } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { NewTableSchema, NewTableType } from "./NewTableModal.schema";

export const NewTableModal = (props: ModalProps) => {
  const form = useForm<NewTableType>({
    resolver: zodResolver(NewTableSchema),
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (file: File) => uploadTable(file),
    mutationKey: ["post", "table"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: GET_ALL_GROUPS_KEY });
      props.onOpenChange(false);
    },
  });

  const onSubmit = ({ table }: NewTableType) => mutate(table);

  return (
    <FormProvider {...form}>
      <Modal
        {...props}
        header={<Text className="font-semibold text-2xl">Новая таблица</Text>}
        body={
          <ControlledFileInput name={"table"} label="Документ" placeholder="Выберите документ" />
        }
        footer={
          <Button
            isSubmitting={form.formState.isSubmitting}
            onClick={form.handleSubmit(onSubmit)}
            size="xl"
          >
            Добавить
          </Button>
        }
      />
    </FormProvider>
  );
};
