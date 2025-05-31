import { changeRowColor } from "@/api/request/table";
import { CHANGE_ROW_COLOR_KEY } from "@/constants/queryKeys";
import { Maybe } from "@/types/utils";
import { useMutation } from "@tanstack/react-query";
import { flexRender } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { forwardRef } from "react";
import { ChevronButton } from "../../ChevronButton/ChevronButton";
import { SelectItem } from "../../Select/Select.types";
import {
  ChevronButtonSkeleton,
  DataContainer,
  FlexContainer,
} from "../DragAlongCell/DragAlongCell.styles";
import { RowTooltip } from "../RowTooltp/RowTooltip";
import { useTableRowContext } from "../TableRow/TableRow.context";
import { IdTableCellProps } from "./IdTableCell.types";

export const IdTableCell = forwardRef(({ cell }: IdTableCellProps, ref) => {
  const { isExpanded, isInteractive, toggleExpanded, activeColor, setColor } = useTableRowContext();

  const changeColorMutation = useMutation({
    mutationKey: CHANGE_ROW_COLOR_KEY,
    mutationFn: (color: string) =>
      changeRowColor({
        rowId: Number(cell.row.original.applicant.id),
        color: color,
      }),
  });

  const handleChangeColor = (color: Maybe<SelectItem>) => {
    changeColorMutation.mutate(color.label);
    setColor(color);
  };

  return (
    <FlexContainer>
      <RowTooltip activeColor={activeColor} onChangeColor={handleChangeColor}>
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
  );
});

IdTableCell.displayName = "IdTableCell";
