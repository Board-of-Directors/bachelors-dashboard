import { TableRow } from "@/types/table";
import { Header } from "@tanstack/react-table";

export interface DraggableTableHeaderProps {
  header: Header<TableRow, unknown>;
}
