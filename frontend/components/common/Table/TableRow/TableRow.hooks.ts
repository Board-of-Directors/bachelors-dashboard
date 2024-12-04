import { TableRow } from "@/types/table";
import { Row } from "@tanstack/react-table";
import { useEffect, useReducer, useRef, useState } from "react";
import { SelectItem } from "../../Select/Select.types";
import { TableRowContextType } from "./TableRow.context";
import { createDefaultColor } from "./TableRow.utils";

export const useTableRow = (row: Row<TableRow>) => {
  const [isExpanded, setIsExpanded] = useReducer((state) => !state, false);
  const [activeColor, setColor] = useState<SelectItem>(
    createDefaultColor(row.original.applicant.color),
  );

  const [commentsRowHeight, setCommentsRowHeight] = useState<number>(0);
  const commentsRowRef = useRef<HTMLTableRowElement>(null);

  const comments = row.original.comments;
  const isInteractive = comments?.length && comments.length > 0;

  const context: TableRowContextType = {
    isExpanded: isExpanded,
    isInteractive: isInteractive,
    toggleExpanded: setIsExpanded,
    activeColor: activeColor,
    setColor: setColor,
  };

  const handleAddComments = () => {};

  useEffect(() => {
    const clientHeight = commentsRowRef.current?.getBoundingClientRect().height ?? 0;
    const actualHeight = isExpanded ? clientHeight : 0;
    setCommentsRowHeight(actualHeight);
  }, [commentsRowRef.current, isExpanded]);

  return {
    states: { commentsRowHeight, context, comments, commentsRowRef, activeColor, isExpanded },
    handleAddComments,
  };
};
