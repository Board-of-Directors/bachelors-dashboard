import { Applicant } from "./applicant";
import { SortStrategy } from "./utils";

interface TableColumn {
  name: string;
  isHidden: boolean;
  sortStrategy: SortStrategy;
  orderId: number;
}

interface TableRow {
  applicant: Applicant<any>;
  comments?: Comment[];
  insurance?: string;
}

interface Table {
  name: string;
  rows: TableRow[];
}

type ColumnType = "number" | "string" | "boolean";

type TableSchema = { accessorKey: string; header: string; columnType: ColumnType }[];

interface ResponseTable {
  schema: TableSchema;
  table: Table;
}

export type { ColumnType, ResponseTable, Table, TableColumn, TableRow, TableSchema };
