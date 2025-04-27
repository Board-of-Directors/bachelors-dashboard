import { Container } from "./KanbanHeader.styles";
import { KanbanHeaderProps } from "./KanbanHeader.types";
import { KanbanHeaderItem } from "./KanbanHeaderItem/KanbanHeaderItem";

export const KanbanHeader = ({ columns }: KanbanHeaderProps) => (
  <Container>
    {Object.keys(columns).map((status, key) => (
      <KanbanHeaderItem length={columns[status].length} name={status} key={key} />
    ))}
  </Container>
);
