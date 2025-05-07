import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { DraggableTableHeader } from "../DraggableTableHeader/DraggableTableHeader";
import { useTableContext } from "../Table.context";
import { Header, TableRow } from "./TableHeader.styles";

export const TableHeader = () => {
  const { table, columnOrder } = useTableContext();

  return (
    <Header>
      {table?.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          <SortableContext strategy={horizontalListSortingStrategy} items={columnOrder}>
            {headerGroup.headers.map((header) => (
              <DraggableTableHeader key={header.id} header={header} />
            ))}
          </SortableContext>
        </TableRow>
      ))}
    </Header>
  );
};
