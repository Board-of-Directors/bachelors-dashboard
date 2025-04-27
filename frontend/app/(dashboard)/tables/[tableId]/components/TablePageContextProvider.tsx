import { PropsWithChildren } from "react";
import { TablePageContext, TablePageContextType } from "../page.context";

export const TablePageContextProvider = ({
  children,
  ...context
}: PropsWithChildren<TablePageContextType>) => (
  <TablePageContext.Provider value={context}>{children}</TablePageContext.Provider>
);
