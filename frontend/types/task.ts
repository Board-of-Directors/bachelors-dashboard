import { UniqueIdentifier } from "@dnd-kit/core";
import { Employee } from "./employee";
import { Tag } from "./tag";

type TaskStatusType = "unchecked" | "waiting" | "in_progress" | "done";

enum TaskStatus {
  "Не выполнена" = "NOT_STARTED",
  "Ожидает выполнения" = "AWAITING",
  "В процессе" = "IN_PROGRESS",
  "Готово" = "READY",
}

interface OptionalTaskData {
  assignees: Employee[];
  startDate: string;
  endDate: string;
  tags: Tag[];
}

interface Task extends Partial<OptionalTaskData> {
  status: TaskStatusType;
  id: UniqueIdentifier;
  header: string;
}

export type { Task, TaskStatus };
