import { Box, Tbody } from "@chakra-ui/react";
import { useTableContext } from "../Table.context";
import { TableRow } from "../TableRow/TableRow";
import { memo } from "react";
import { Table } from "@tanstack/react-table";

const UnMemoizedTableBody = ({ table }: { table: Table<any> }) => {
  const { columnOrder } = useTableContext();

  return (
    <>
      {table
        ?.getRowModel()
        .rows.map((row) => <TableRow columnOrder={columnOrder} row={row} key={row.id} />)}
    </>
  );
};

const MemoizedTableBody = memo(
  UnMemoizedTableBody,
  (prev, next) => prev.table.options.data === next.table.options.data,
) as typeof UnMemoizedTableBody;

export const TableBody = () => {
  const { table } = useTableContext();

  return table.getState().columnSizingInfo.isResizingColumn ? (
    <MemoizedTableBody table={table} />
  ) : (
    <UnMemoizedTableBody table={table} />
  );
};
