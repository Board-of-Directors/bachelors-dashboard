type TableColumnType = "STRING" | "NUMBER"

type TableRowColor = "RED" | "BLUE" | "WHITE"

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

export type { ResponseTableDetail, ResponseTableRow, TableRowColor };
