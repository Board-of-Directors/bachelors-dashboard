import { createContext, useContext } from "react";

interface TablePageContextType {
  filters: any;
  setFilters: (filters: any) => void;
}

const defaultTablePageContext: TablePageContextType = {
  filters: null,
  setFilters: () => {},
};

const TablePageContext = createContext<TablePageContextType>(defaultTablePageContext);

const useTablePageContext = () => useContext(TablePageContext);

export { TablePageContext, useTablePageContext, type TablePageContextType };
