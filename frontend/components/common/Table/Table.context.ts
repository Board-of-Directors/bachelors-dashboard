import { TableRow } from "@/types/table";
import { ColumnDef, Table } from "@tanstack/react-table";
import { createContext, MutableRefObject, useContext } from "react";

interface TableContextType {
  table: Table<TableRow> | null;
  columnOrder: string[];
  hiddenColumns: any;
  firstCellRef: MutableRefObject<HTMLDivElement>;
  columns : ColumnDef<TableRow, any>[];
}

const TableContext = createContext<TableContextType>({
  table: null,
  columnOrder: [],
  hiddenColumns: {},
  firstCellRef: null,
  columns : []
});

const useTableContext = () => {
  return useContext(TableContext);
};

export { TableContext, useTableContext, type TableContextType };
