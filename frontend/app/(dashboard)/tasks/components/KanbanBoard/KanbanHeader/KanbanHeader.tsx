import { Container } from "./KanbanHeader.styles";
import { KanbanHeaderProps } from "./KanbanHeader.types";
import { KanbanHeaderItem } from "./KanbanHeaderItem/KanbanHeaderItem";

// TODO: convertStatusToHeader function
export const KanbanHeader = ({ columns }: KanbanHeaderProps) => (
  <Container>
    {Object.keys(columns).map((status, key) => (
      <KanbanHeaderItem
        name={status}
        length={columns[status].length}
        key={key}
      />
    ))}
  </Container>
);
