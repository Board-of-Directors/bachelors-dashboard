"use client"

import { Button, Header } from "@/components/common";
import { useDisclosure } from "@nextui-org/react";
import { PlusIcon } from "lucide-react";
import { KanbanBoard } from "./components/KanbanBoard/KanbanBoard";
import { NewTaskDrawer } from "./components/NewTaskDrawer/NewTaskDrawer";

const TasksPage = () => {
    const {
        onOpen: onAddNewTaskOpen,
        isOpen: isAddNewTaskOpen,
        onOpenChange: onAddNewTaskOpenChange,
    } = useDisclosure();

    return (
        <>
            <NewTaskDrawer onOpenChange={onAddNewTaskOpenChange} isOpen={isAddNewTaskOpen} />
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
}

export default TasksPage;