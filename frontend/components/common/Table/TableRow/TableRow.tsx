import { TableRowColor } from "@/api/request/table/types";
import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { useEffect, useReducer, useRef, useState } from "react";
import { CommentList } from "../../CommentList/CommentList";
import { SelectItem } from "../../Select/Select.types";
import { DragAlongCell } from "../DragAlongCell/DragAlongCell";
import { colors } from "../RowTooltp/ColorPicker/ColorsPicker.data";
import { useTableContext } from "../Table.context";
import { TableRowContextType } from "./TableRow.context";
import { ApplicantRow, CommentsRow } from "./TableRow.styles";
import { TableRowProps } from "./TableRow.types";
import { TableRowProvider } from "./TableRowProvider";

const defaultColor: SelectItem = {
  value: "transparent",
  label: "none",
};

const createDefaultColor = (color: TableRowColor): SelectItem => {
  if (color === "WHITE") {
    return defaultColor;
  }

  return colors.find((selectColor) => selectColor.label === color);
};

export const TableRow = ({ row, columnOrder }: TableRowProps) => {
  const { firstCellRef } = useTableContext();

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

  return (
    <TableRowProvider {...context}>
      <ApplicantRow background={activeColor.value}>
        {row.getVisibleCells().map((cell) => (
          <SortableContext
            strategy={horizontalListSortingStrategy}
            items={columnOrder}
            key={cell.id}
          >
            <DragAlongCell ref={firstCellRef} cell={cell} key={cell.id} />
          </SortableContext>
        ))}
      </ApplicantRow>
      <CommentsRow height={commentsRowHeight}>
        {comments ? (
          <CommentList
            onAddComment={handleAddComments}
            isExpanded={isExpanded}
            ref={commentsRowRef}
            comments={comments}
          />
        ) : null}
      </CommentsRow>
    </TableRowProvider>
  );
};
