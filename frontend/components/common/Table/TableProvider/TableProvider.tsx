import { closestCenter, DndContext } from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { TableContext } from "../Table.context";
import { TableProviderProps } from "./TableProvider.types";

export const TableProvider = ({ children, sensors, onDragEnd, ...props }: TableProviderProps) => (
  <TableContext.Provider value={props}>
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToHorizontalAxis]}
      onDragEnd={onDragEnd}
      sensors={sensors}
    >
      {children}
    </DndContext>
  </TableContext.Provider>
);
