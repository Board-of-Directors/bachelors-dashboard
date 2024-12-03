"use client";

import { Task } from "@/types/task";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useState } from "react";
import { useKanbanBoard } from "./KanbanBoard.hooks";
import { Container } from "./KanbanBoard.styles";
import { KanbanColumn } from "./KanbanBoard.types";
import { KanbanBody } from "./KanbanBody/KanbanBody";
import { KanbanHeader } from "./KanbanHeader/KanbanHeader";
import { KanbanLoading } from "./KanbanLoading";

export type Items = Record<UniqueIdentifier, Task[]>;

const createItems = (columns: KanbanColumn[]): Items => {
  return columns.reduce((acc, column) => {
    acc[column.id] = column.tasks;

    return acc;
  }, {});
};

export const KanbanBoard = () => {
  const [columns, setColumns] = useState<any>([]);

  const { tasks, isLoading } = useKanbanBoard();

  if (isLoading) {
    return (
      <KanbanLoading />
    );
  }

  return (
    <Container>
      <KanbanHeader columns={columns} />
      <KanbanBody columns={columns} onChangeColumns={setColumns} />
    </Container>
  );
};
