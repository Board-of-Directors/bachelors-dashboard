import { Task } from "@/types/task";

export interface KanbanColumn {
    id: string;
    tasks: Task[];
}