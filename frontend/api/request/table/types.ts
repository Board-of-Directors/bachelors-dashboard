import { UniqueIdentifier } from "@dnd-kit/core";

type TableColumnType = "STRING" | "NUMBER";

type TableRowColor = "RED" | "BLUE" | "WHITE";

interface TableRowItem {
  columnId: number;
  value: string;
  id: number;
}

interface ResponseTableRow {
  items: TableRowItem[];
  color: TableRowColor;
  id: number;
}

interface ResponseTableColumn {
  type: TableColumnType;
  isInsurance: string;
  hidden: boolean;
  name: string;
  id: number;
}

interface ResponseTableDetail {
  columns: ResponseTableColumn[];
  rows: ResponseTableRow[];
  id: number;
}

interface ChangeRowColorRequest {
  rowId: number;
  color: string;
}

interface ChangeColumnPropertyRequest {
  columnHidden: boolean;
  columnWidth: number;
  columnId: number;
}

interface Ids {
  ids: { id: UniqueIdentifier }[];
}

export type {
  ChangeColumnPropertyRequest,
  ChangeRowColorRequest,
  Ids,
  ResponseTableDetail,
  ResponseTableRow,
  TableRowColor,
};
