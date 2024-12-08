import { Text } from "@/components/common";
import { Task } from "@/types/task";
import { CalendarIcon } from "lucide-react";
import { Circle, Row } from "./KanbanCard.styles";

export const DeadlineRow = ({ startDate, endDate }: Pick<Task, "startDate" | "endDate">) => (
  <Row>
    <CalendarIcon className="size-[16px] text-icon-gray" />
    <Text className="text-text-gray">{startDate}</Text>
    <Circle />
    <Text className="text-text-gray">{endDate}</Text>
  </Row>
);
