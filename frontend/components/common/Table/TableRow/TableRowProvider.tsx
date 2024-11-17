import { PropsWithChildren } from "react";
import { TableRowContext, TableRowContextType } from "./TableRow.context";

export const TableRowProvider = ({
  children,
  ...props
}: PropsWithChildren<TableRowContextType>) => (
  <TableRowContext.Provider value={props}>{children}</TableRowContext.Provider>
);
