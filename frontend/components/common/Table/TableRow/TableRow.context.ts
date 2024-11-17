import { Maybe } from "@/types/utils";
import { createContext, useContext } from "react";
import { SelectItem } from "../../Select/Select.types";

interface TableRowContextType {
    isInteractive : boolean;
    isExpanded : boolean;
    activeColor : Maybe<SelectItem>;
    toggleExpanded : () => void;
    setColor : (color : Maybe<SelectItem>) => void;
}

const TableRowContext = createContext<TableRowContextType>({
    isExpanded : false,
    isInteractive : false,
    activeColor : undefined,
    toggleExpanded : () => {},
    setColor : () => {}
});

const useTableRowContext = () => {
    return useContext(TableRowContext);
}

export {TableRowContext, type TableRowContextType, useTableRowContext}