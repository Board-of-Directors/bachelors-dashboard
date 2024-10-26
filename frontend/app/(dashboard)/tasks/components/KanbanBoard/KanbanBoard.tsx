"use client";

import { Task } from "@/types/task";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useMemo, useState } from "react";
import { Container } from "./KanbanBoard.styles";
import { KanbanColumn } from "./KanbanBoard.types";
import { KanbanBody } from "./KanbanBody/KanbanBody";
import { KanbanHeader } from "./KanbanHeader/KanbanHeader";

export type Items = Record<UniqueIdentifier, Task[]>;

const createItems = (columns: KanbanColumn[]): Items => {
  return columns.reduce((acc, column) => {
    acc[column.id] = column.tasks;

    return acc;
  }, {});
};

export const KanbanBoard = () => {
  const defaultColumns = useMemo(() => [], []);
  const [columns, setColumns] = useState<Items>({});

  return (
    <Container>
      <KanbanHeader columns={columns} />
      <KanbanBody columns={columns} onChangeColumns={setColumns} />
    </Container>
  );
};
