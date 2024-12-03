import { api } from "@/api";
import { CreateTaskRequest, TaskListResponse } from "./types";

const getAllTasks = async (): Promise<TaskListResponse> => api.get('/task/all');

const createTask = async (request : CreateTaskRequest) : Promise<void> => api.post('/task', request);

export { createTask, getAllTasks };

