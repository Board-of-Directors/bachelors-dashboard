import { api } from "@/api";
import { CreateTaskRequest, OrderTasksRequest, TaskListResponse } from "./types";

const getAllTasks = async (): Promise<TaskListResponse[]> => api.get('/task/all');

const createTask = async (request : CreateTaskRequest) : Promise<void> => api.post('/task', request);

const orderTasks = async (request : OrderTasksRequest) => api.put('/task/order', request);

export { createTask, getAllTasks, orderTasks };

