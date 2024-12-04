import {
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useRef, useState } from "react";
import { TableContextType } from "./Table.context";
import { TableProps } from "./Table.types";
import { createColumnSizing, handleDragEnd, toColumns, transformTable } from "./Table.utils";

export const useTableMethods = ({ table: defaultTable }: TableProps) => {
  const [transformedTable, columns] = useMemo(() => {
    const table = transformTable(defaultTable);

    const columns = toColumns(table);

    return [table, columns] as const;
  }, [defaultTable]);

  const [columnOrder, setColumnOrder] = useState<string[]>(() => columns.map((c) => c.id!));
  const [columnVisibility, setColumnVisibility] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const firstCellRef = useRef<HTMLDivElement>(null);

  const table = useReactTable({
    data: transformedTable.table.rows,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onSortingChange: setSorting,
    columnResizeMode: "onChange",
    state: {
      columnOrder,
      columnVisibility,
      sorting,
    },
    defaultColumn: {
      minSize: 220,
      maxSize: 800,
    },
  });

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {}),
  );

  const context: TableContextType = {
    table: table,
    columnOrder: columnOrder,
    hiddenColumns: columnVisibility,
    firstCellRef: firstCellRef,
    columns: columns
  };

  const columnSizeVars = useMemo(
    () => createColumnSizing(table),
    [table.getState().columnSizingInfo, table.getState().columnSizing],
  );

  const onDragEnd = (event: DragEndEvent) => {
    handleDragEnd(event, setColumnOrder);
  };

  return {
    table,
    sensors,
    onDragEnd,
    columnSizeVars,
    context,
  };
};
