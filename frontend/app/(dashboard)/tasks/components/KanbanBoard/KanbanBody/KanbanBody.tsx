import { KanbanCard } from "../KanbanCard/KanbanCard";
import { KanbanColumn } from "../KanbanColumn/KanbanColumn";
import { Container } from "./KanbanBody.styles";
import { KanbanBodyProps } from "./KanbanBody.types";

export const KanbanBody = (props: KanbanBodyProps) => (
  <Container>
    <KanbanColumn items={[]} id={''}>
      {[].map((item) => (<KanbanCard card={item} key={item.id} />))}
    </KanbanColumn>
  </Container>
);
