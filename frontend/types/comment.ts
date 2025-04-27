import { Employee } from "./employee";

export interface Comment {
  employee: Employee;
  message: string;
  date: string;
}
