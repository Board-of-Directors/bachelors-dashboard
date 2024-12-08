import { VStack } from "@chakra-ui/react";
import { useSortable } from "@dnd-kit/sortable";
import { ReactNode } from "react";
import { KanbanColumnProps } from "./KanbanColumn.types";

export const KanbanColumn = ({
  items,
  children,
  id,
}: KanbanColumnProps & { items: any[]; children: ReactNode }) => {
  const { setNodeRef } = useSortable({
    id,
    data: {
      type: "container",
      children: items,
    },
  });

  return (
    <VStack ref={setNodeRef} gridColumn="span 1 / span 1" gap="20px">
      {children}
    </VStack>
  );
};
