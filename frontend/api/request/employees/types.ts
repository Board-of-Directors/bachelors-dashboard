export interface Employee {
    /** Адрес электронной почты. */
    email: string;
    /** Уникальный идентифиактор пользователя. */
    id: string;
  }
  
  export type GetEmployeesResponse = Employee[];  