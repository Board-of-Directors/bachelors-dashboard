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

interface Id {
  id: number;
}

type Ids = Id[];

interface OrderTasksRequest {
  status: string;
  ids: Ids;
}

export type { CreateTaskRequest, Id, Ids, OrderTasksRequest, TaskListResponse, TaskResponse };
