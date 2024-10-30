import { UniqueIdentifier } from "@dnd-kit/core";
import { Employee } from "./employee";
import { Tag } from "./tag";

type TaskStatus = "unchecked" | "waiting" | "in_progress" | "done"

interface OptionalTaskData {
    assignees: Employee[];
    startDate: string;
    endDate: string;
    tags: Tag[];
}

interface Task extends Partial<OptionalTaskData> {
    status: TaskStatus;
    header: string;
    id: UniqueIdentifier;
}

export type { Task, TaskStatus };
