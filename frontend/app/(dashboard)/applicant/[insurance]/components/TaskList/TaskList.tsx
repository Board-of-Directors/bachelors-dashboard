import { Button, Text } from "@/components/common";
import { NewTaskDrawer } from "@/components/modals";
import { useDisclosure } from "@nextui-org/react";
import { PlusIcon } from "lucide-react";
import { TaskColumn } from "./TaskColumn/TaskColumn";
import { Container, Header, LeftContent } from "./TaskList.styles";
import { TaskListProps } from "./TaskList.types";

export const TaskList = ({ tasks }: TaskListProps) => {
  const {
    onOpenChange: onAddNewTaskOpenChange,
    onOpen: onAddNewTaskOpen,
    isOpen: isAddNewTaskOpen,
  } = useDisclosure();

  return (
    <>
      <NewTaskDrawer onOpenChange={onAddNewTaskOpenChange} isOpen={isAddNewTaskOpen} />
      <Container>
        <Header>
          <LeftContent>
            <Text className="text-[20px] font-semibold">Список задач</Text>
            <Text className="text-text-gray">{`${tasks.length} шт.`}</Text>
          </LeftContent>
          <Button
            className="w-fit text-indicator-info bg-background-info"
            onClick={onAddNewTaskOpen}
            color="secondary"
            size="sm"
          >
            <PlusIcon className="size-[16px] text-link-blue" />
            Новая задача
          </Button>
        </Header>
        <TaskColumn tasks={tasks} />
      </Container>
    </>
  );
};
