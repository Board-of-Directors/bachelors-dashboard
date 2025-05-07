import { ResponseTableDetail } from "@/api/request/table/types";
import { TableRow } from "@/types/table";
import { Table } from "@tanstack/react-table";

interface TableProps {
  table: ResponseTableDetail;
}

interface TableContent {
  table: Table<TableRow>;
  columnOrder: string[];
}

export type { TableContent, TableProps };

