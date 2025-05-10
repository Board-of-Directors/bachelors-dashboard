import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { useRouter } from "next/navigation";
import { CommentList } from "../../CommentList/CommentList";
import { DragAlongCell } from "../DragAlongCell/DragAlongCell";
import { useTableContext } from "../Table.context";
import { useTableRow } from "./TableRow.hooks";
import { ApplicantRow, CommentsRow } from "./TableRow.styles";
import { TableRowProps } from "./TableRow.types";
import { TableRowProvider } from "./TableRowProvider";

export const TableRow = ({ row, columnOrder }: TableRowProps) => {
  const { firstCellRef } = useTableContext();
  const { states, handleAddComments } = useTableRow(row);
  const router = useRouter();

  const { context, commentsRowHeight, comments, commentsRowRef, isExpanded, activeColor } = states;

  const handleClick = () => {
    if (row.original.insurance) {
      router.push(`/applicant/${row.original.insurance}`);
    }
  };

  return (
    <TableRowProvider {...context}>
      <ApplicantRow onClick={handleClick} background={activeColor.value}>
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
            comments={comments as any}
            isExpanded={isExpanded}
            ref={commentsRowRef}
          />
        ) : null}
      </CommentsRow>
    </TableRowProvider>
  );
};
