"use client";

import { useKanbanBoard } from "./KanbanBoard.hooks";
import { Container } from "./KanbanBoard.styles";
import { KanbanBody } from "./KanbanBody/KanbanBody";
import { KanbanHeader } from "./KanbanHeader/KanbanHeader";
import { KanbanLoading } from "./KanbanLoading";

export const KanbanBoard = () => {
  const { tasks, setTasks, isLoading } = useKanbanBoard();

  if (isLoading) {
    return <KanbanLoading />;
  }

  return (
    <Container>
      <KanbanHeader columns={tasks} />
      <KanbanBody columns={tasks} onChangeColumns={setTasks} />
    </Container>
  );
};
