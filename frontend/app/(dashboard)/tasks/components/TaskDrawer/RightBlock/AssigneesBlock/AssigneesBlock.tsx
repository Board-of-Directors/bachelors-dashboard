import { Text, TextButton, UserList } from "@/components/common";
import { UserItem } from "@/components/common/UserList/UserList.types";
import { useDisclosure } from "@nextui-org/react";
import { useMemo } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { TaskSchemaType } from "../../TaskSchema";
import { Container, Row } from "../RightBlock.styles";
import { NewAssigneeModal } from "./NewAssigneeModal/NewAssigneeModal";

export const AssigneesBlock = () => {
  const { onOpenChange, isOpen, onOpen } = useDisclosure();
  const { setValue, getValues, watch } = useFormContext<TaskSchemaType>();

  watch();

  const users = useMemo<UserItem[]>(() => {
    const assignees = getValues("assignees") ?? [];

    return assignees.map(({ label, value }) => ({ email: label, photo: value }));
  }, [getValues("assignees")]);

  const handleRemoveAssignee = (index: number) => {
    const assignees = getValues("assignees");

    setValue(
      "assignees",
      assignees.filter((_, curIndex) => curIndex !== index),
    );
  };

  const handleAddAssignees = ({ items }: FieldValues) => {
    setValue("assignees", items);
  };

  return (
    <>
      <NewAssigneeModal
        onAddAssignees={handleAddAssignees}
        onOpenChange={onOpenChange}
        isOpen={isOpen}
      />
      <Container>
        <Row>
          <Text className="text-[20px] font-medium">Ответственные</Text>
          <TextButton onClick={onOpen}>Добавить</TextButton>
        </Row>
        <UserList users={users} onDeleteUser={handleRemoveAssignee} />
      </Container>
    </>
  );
};
