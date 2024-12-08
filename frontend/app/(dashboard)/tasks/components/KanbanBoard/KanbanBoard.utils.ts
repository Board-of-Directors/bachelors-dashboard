import { TaskListResponse } from "@/api/request/task/types";
import { Items } from "./KanbanBoard.types";

const emptyKanbanBoard: Items = {
  "Не выполнена": [],
  "Ожидает выполнения": [],
  "В процессе": [],
  Готово: [],
};

export const createKanbanBoard = (data: TaskListResponse[] | undefined): Items => {
  if (!data) {
    return {};
  }

  return data.reduce((acc, item) => {
    acc[item.status] = item.tasks.map((task) => ({ ...task, id: `item-${task.id}` }));

    return acc;
  }, emptyKanbanBoard);
};
