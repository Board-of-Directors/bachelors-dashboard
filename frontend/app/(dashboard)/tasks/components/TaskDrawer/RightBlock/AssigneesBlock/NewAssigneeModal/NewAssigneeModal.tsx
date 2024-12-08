import { MultiselectModal, Text, UserList } from "@/components/common";
import { NewAssigneeModalProps } from "./NewAssigneeModal.types";

const items = [
  { label: "hello-world@gmail.com", value: null },
  { label: "test-emaul@gmail.com", value: null },
  { label: "o.veber@g.nsu.ru", value: null },
];

export const NewAssigneeModal = ({ onAddAssignees, ...props }: NewAssigneeModalProps) => (
  <MultiselectModal
    selectProps={{ label: "Ответственный", placeholder: "Выберите ответственного" }}
    header={<Text className="text-2xl text-text-back">Ответственные</Text>}
    onSubmit={onAddAssignees}
    items={items}
    {...props}
  >
    {({ elements, remove }) => (
      <UserList
        users={elements.map(({ label, value }) => ({ email: label, photo: value }))}
        onDeleteUser={remove}
      />
    )}
  </MultiselectModal>
);
