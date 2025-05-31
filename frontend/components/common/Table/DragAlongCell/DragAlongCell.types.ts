import { TableRow } from "@/types/table";
import { Cell } from "@tanstack/react-table";
import { ChevronButtonProps } from "../../ChevronButton/ChevronButton.types";

export interface DragAlongCellProps {
  cell: Cell<TableRow, unknown>;
}
