interface TaskResponse {
    id: number;
    name: string;
    employee: string;
    tags: string[];
    created: string;
    deadline: string;
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
    tags : any;
}

export type { CreateTaskRequest, TaskListResponse };

