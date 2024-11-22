import { api } from "@/api";
import { TaskListResponse } from "./types";

const getAllTasks = (): Promise<TaskListResponse> => api.get('/task/all');

export { getAllTasks };