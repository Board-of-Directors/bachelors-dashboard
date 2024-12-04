import { UniqueIdentifier } from "@dnd-kit/core";

type TableColumnType = "STRING" | "NUMBER";

type TableRowColor = "RED" | "BLUE" | "WHITE";

interface ResponseTableColumn {
  id: number;
  name: string;
  type: TableColumnType;
  hidden: boolean;
}

interface TableRowItem {
  id: number;
  columnId: number;
  value: string;
}

interface ResponseTableRow {
  id: number;
  color: TableRowColor;
  items: TableRowItem[];
}

interface ResponseTableDetail {
  id: number;
  columns: ResponseTableColumn[];
  rows: ResponseTableRow[];
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
