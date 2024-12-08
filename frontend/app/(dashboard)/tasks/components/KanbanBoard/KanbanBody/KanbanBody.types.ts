import { SetStateAction } from "react";
import { Items } from "../KanbanBoard.types";

export interface KanbanBodyProps {
    onChangeColumns: React.Dispatch<SetStateAction<Items>>;
    columns: Items;
}