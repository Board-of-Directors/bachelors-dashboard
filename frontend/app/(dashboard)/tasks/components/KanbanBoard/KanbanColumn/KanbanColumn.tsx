import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { KanbanColumnProps } from "./KanbanColumn.types";

export const KanbanColumn = ({
  children,
}: KanbanColumnProps & { items: any[]; children: ReactNode }) => (
  <VStack gridColumn="span 1 / span 1" gap="20px">
    {children}
  </VStack>
);
