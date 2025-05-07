import { TableRow } from "@/types/table";
import { Row } from "@tanstack/react-table";

export interface TableRowProps {
  columnOrder: string[];
  row: Row<TableRow>;
}
