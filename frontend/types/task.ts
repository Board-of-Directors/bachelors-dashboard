import { UniqueIdentifier } from "@dnd-kit/core";
import { Employee } from "./employee";
import { Tag } from "./tag";

type TaskStatus = "unchecked" | "waiting" | "in_progress" | "done";

interface OptionalTaskData {
  assignees: Employee[];
  startDate: string;
  endDate: string;
  tags: Tag[];
}

interface Task extends Partial<OptionalTaskData> {
  id: UniqueIdentifier;
  status: TaskStatus;
  header: string;
}

export type { Task, TaskStatus };
