import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { flexRender } from "@tanstack/react-table";
import { CSSProperties, forwardRef } from "react";
import { IdTableCell } from "../IdTableCell/IdTableCell";
import { TableCell } from "./DragAlongCell.styles";
import { DragAlongCellProps } from "./DragAlongCell.types";

export const DragAlongCell = forwardRef<HTMLDivElement, DragAlongCellProps>(
  ({ cell }: DragAlongCellProps, ref) => {
    const { isDragging, setNodeRef, transform } = useSortable({
      id: cell.column.id,
    });

    const style: CSSProperties = {
      opacity: isDragging ? 0.8 : 1,
      position: "relative",
      transform: CSS.Translate.toString(transform),
      transition: "width transform 0.2s ease-in-out",
      width: cell.column.getSize(),
      zIndex: isDragging ? 1 : 0,
    };

    if (cell.column.id === "id") {
      return (
        <TableCell ref={setNodeRef} style={style} isDragging={isDragging}>
          <IdTableCell cell={cell} ref={ref} />
        </TableCell>
      );
    }

    return (
      <TableCell ref={setNodeRef} style={style} isDragging={isDragging}>
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </TableCell>
    );
  },
);

DragAlongCell.displayName = "DragAlongCell";
