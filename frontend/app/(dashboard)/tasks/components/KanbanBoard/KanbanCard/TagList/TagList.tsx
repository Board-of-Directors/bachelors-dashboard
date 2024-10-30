import { Task } from "@/types/task";
import { Row } from "../KanbanCard.styles";

export const TagList = ({ tags }: Pick<Task, "tags">) => (
  <Row>
    {tags.map((tag, key) => (
      <div key={key}></div>
    ))}
  </Row>
);
