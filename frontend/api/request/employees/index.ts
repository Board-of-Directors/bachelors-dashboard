import { api } from "@/api";
import { GetEmployeesResponse } from "./types";

/**
 * Получает список всех сотрудников проекта.
 *
 * @returns возвращает список сотрудников проекта.
 */
export const getEmployees = (): Promise<GetEmployeesResponse> => api.get("/employee");

/**
 * Удаляет сотрудника из проекта.
 *
 * @param employeeId - id сотрудника в проекте.
 */
export const deleteEmployee = (employeeId: string): Promise<void> =>
  api.delete(`/employee/${employeeId}`);

/**
 * Создает сущность сотрудника в проекте.
 *
 * @param email - электронная почта сотрудника.
 */
export const createEmployee = (email: string): Promise<void> => api.post("/employee", { email });
