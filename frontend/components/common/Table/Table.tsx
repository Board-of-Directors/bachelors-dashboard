"use client";

import { useTableMethods } from "./Table.hooks";
import { OverflowContainer, TableContainer } from "./Table.styles";
import { TableProps } from "./Table.types";
import { TableBody } from "./TableBody/TableBody";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableProvider } from "./TableProvider/TableProvider";

export const Table = ({ table }: TableProps) => {
  const { context, ...methods } = useTableMethods({ table });
  
  const style = {
    width: methods.table.getTotalSize(),
    ...methods.columnSizeVars,
  };

  return (
    <TableProvider {...methods} {...context}>
      <OverflowContainer>
        <TableContainer style={style}>
          <TableHeader />
          <TableBody />
        </TableContainer>
      </OverflowContainer>
    </TableProvider>
  );
};
