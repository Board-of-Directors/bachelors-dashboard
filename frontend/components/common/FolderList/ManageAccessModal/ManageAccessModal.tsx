import { api, BASE_URL } from "@/api";
import { Button, ControlledSelect, Modal, SelectItem, Text, UserList } from "@/components/common";
import { Employee } from "@/types/employee";
import { zodResolver } from "@hookform/resolvers/zod";
import { createServer } from "miragejs";
import { useEffect, useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { ManageAccessModalSchema, ManageAccessModalType } from "./ManageAccessModal.schema";
import { Header } from "./ManageAccessModal.styles";
import { ManangeAccessModalProps } from "./ManageAccessModal.types";
import { toAutocompleteItems } from "./ManageAccessModal.utils";

createServer({
  routes() {
    this.get(`${BASE_URL}/employees`, () => [
      { email: "hello-world@gmail.com", photo: null },
      { email: "test-emaul@gmail.com", photo: null },
      { email: "o.veber@g.nsu.ru", photo: null },
    ]);
  },
});

export const ManageAccessModal = ({ folderName, ...props }: ManangeAccessModalProps) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployees, onSelectEmployees] = useState<SelectItem[]>([]);

  const form = useForm<ManageAccessModalType>({
    resolver: zodResolver(ManageAccessModalSchema),
  });

  const onSubmit = (fieldValues: FieldValues) => {
    const currentEmployees = fieldValues.employees.map((item: SelectItem) => item.value);
    setEmployees(currentEmployees);
  };

  const handleDeleteUser = (index: number) => {
    setEmployees(employees.filter((_, curIndex) => curIndex !== index));
  };

  useEffect(() => {
    api
      .get(`${BASE_URL}/employees`)
      .then((response) => response.data)
      .then((data) => onSelectEmployees(toAutocompleteItems(data)));
  }, []);

  return (
    <FormProvider {...form}>
      <Modal
        {...props}
        header={
          <Header>
            <Text className="font-semibold text-2xl">Настроить доступ</Text>
            <Text className="text-text-gray text-base">{folderName}</Text>
          </Header>
        }
        body={
          <>
            {employees.length > 0 ? (
              <UserList
                onDeleteUser={handleDeleteUser}
                header="Доступ разрешён"
                users={employees}
              />
            ) : null}
            <ControlledSelect
              selectionMode="multiple"
              items={selectedEmployees}
              placeholder="Выберите сотрудника"
              name={"employees"}
              label="Сотрудник"
            />
          </>
        }
        footer={
          <Button size="xl" onClick={form.handleSubmit(onSubmit)}>
            Поделиться доступом
          </Button>
        }
      />
    </FormProvider>
  );
};
