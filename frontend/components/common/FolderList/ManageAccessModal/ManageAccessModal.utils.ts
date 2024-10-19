import { Employee } from "@/types/employee";
import { SelectItem } from "../../Select/Select.types";

export const toAutocompleteItems = (employees: Employee[]): SelectItem[] => {
    return employees.map((employee, index) => ({
        label: employee.email,
        value: employee,
    }));
};