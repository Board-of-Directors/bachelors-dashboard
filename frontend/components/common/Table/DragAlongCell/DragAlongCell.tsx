import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { flexRender } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { CSSProperties, forwardRef } from "react";
import { ChevronButton } from "../../ChevronButton/ChevronButton";
import { RowTooltip } from "../RowTooltp/RowTooltip";
import { useTableRowContext } from "../TableRow/TableRow.context";
import {
  ChevronButtonSkeleton,
  DataContainer,
  FlexContainer,
  TableCell,
} from "./DragAlongCell.styles";
import { DragAlongCellProps } from "./DragAlongCell.types";

export const DragAlongCell = forwardRef<HTMLDivElement, DragAlongCellProps>(
  ({ cell }: DragAlongCellProps, ref) => {
    const { activeColor, setColor, isInteractive, isExpanded, toggleExpanded } =
      useTableRowContext();
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
          <FlexContainer>
            <RowTooltip activeColor={activeColor} onChangeColor={setColor}>
              <MoreHorizontal className="size-[18px] text-icon-gray" />
            </RowTooltip>
            {isInteractive ? (
              <ChevronButton isExpanded={isExpanded} toggle={toggleExpanded} />
            ) : (
              <ChevronButtonSkeleton />
            )}
            <DataContainer ref={ref}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </DataContainer>
          </FlexContainer>
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
