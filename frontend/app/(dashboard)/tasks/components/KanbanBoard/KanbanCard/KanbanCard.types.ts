import { TaskResponse } from "@/api/request/task/types";
import { BoxProps } from "@chakra-ui/react";

export interface KanbanCardProps extends BoxProps {
  card: TaskResponse;
}
