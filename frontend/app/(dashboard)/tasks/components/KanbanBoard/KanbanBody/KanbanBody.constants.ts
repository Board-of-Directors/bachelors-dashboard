import { MeasuringStrategy } from "@dnd-kit/core";

export const measuring = {
  droppable: {
    strategy: MeasuringStrategy.Always,
  },
};

export const TaskStatusSchema = {
  "Не выполнена": "NOT_STARTED",
  "Ожидает выполнения": "AWAITING",
  "В процессе": "IN_PROGRESS",
  Готово: "READY",
};
