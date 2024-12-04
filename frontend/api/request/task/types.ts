import { UniqueIdentifier } from "@dnd-kit/core";

interface TaskResponse {
  id: UniqueIdentifier;
  employee: string;
  deadline: string;
  created: string;
  tags: string[];
  name: string;
}

interface TaskListResponse {
  tasks: TaskResponse[];
  status: string;
  count: number;
}

interface CreateTaskRequest {
  description: string;
  deadline: string;
  name: string;
  tags: any;
}

export type { CreateTaskRequest, TaskListResponse, TaskResponse };
