"use client";

import { Button, Header } from "@/components/common";
import { useDisclosure } from "@nextui-org/react";
import { PlusIcon } from "lucide-react";
import { KanbanBoard } from "../../../components/blocks/KanbanBoard/KanbanBoard";
import { TaskDrawer } from "./components/TaskDrawer/TaskDrawer";

const TasksPage = () => {
  const {
    onOpen: onAddNewTaskOpen,
    isOpen: isAddNewTaskOpen,
    onOpenChange: onAddNewTaskOpenChange,
  } = useDisclosure();

  return (
    <>
      <TaskDrawer onOpenChange={onAddNewTaskOpenChange} isOpen={isAddNewTaskOpen} />
      <Header
        className={"px-10 py-7 justify-between"}
        header={"Доска задач"}
        rightContent={
          <Button onClick={onAddNewTaskOpen}>
            <PlusIcon className="text-white size-[18px] flex-shrink-0" />
            Новая задача
          </Button>
        }
      />
      <KanbanBoard />
    </>
  );
};

export default TasksPage;
