import { DragEndEvent, SensorDescriptor } from "@dnd-kit/core";
import { PropsWithChildren } from "react";
import { TableContextType } from "../Table.context";

export interface TableProviderProps extends PropsWithChildren<TableContextType> {
  onDragEnd: (event: DragEndEvent) => void;
  sensors: SensorDescriptor<any>[];
}
