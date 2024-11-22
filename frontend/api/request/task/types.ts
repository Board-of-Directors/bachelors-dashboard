interface TaskResponse {
    id: number;
    name: string;
    employee: string;
    tags: string[];
    created: string;
    deadline: string;
}

interface TaskListResponse {
    count: number;
    status: string;
    tasks: TaskResponse[];
}

export type { TaskListResponse };
