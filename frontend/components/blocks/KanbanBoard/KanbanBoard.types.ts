import { TaskResponse } from "@/api/request/task/types";
import { UniqueIdentifier } from "@dnd-kit/core";

export type Items = Record<UniqueIdentifier, TaskResponse[]>;

export interface KanbanColumn {
  tasks: TaskResponse[];
  id: string;
}
