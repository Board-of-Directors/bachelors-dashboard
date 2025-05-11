import { KanbanCard } from "@/components/blocks/KanbanBoard";
import { TaskListProps } from "../TaskList.types";
import { Container } from "./TaskColumn.styles";

export const TaskColumn = ({ tasks }: TaskListProps) => (
  <Container>
    {/* {[tasks].map((task) => (
      <KanbanCard task={task} key={task.id} _hover={{ shadow: "none" }} />
    ))} */}
  </Container>
);
