import { DndContext, DragOverlay } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { KanbanCard } from "../KanbanCard/KanbanCard";
import { KanbanColumn } from "../KanbanColumn/KanbanColumn";
import { measuring } from "./KanbanBody.constants";
import { useKanban } from "./KanbanBody.hooks";
import { Container } from "./KanbanBody.styles";
import { KanbanBodyProps } from "./KanbanBody.types";

export const KanbanBody = (props: KanbanBodyProps) => {
  const {
    collisionDetectionStrategy,
    findActiveTask,
    containers,
    handlers,
    activeId,
    sensors,
    items,
  } = useKanban(props);

  return (
    <Container>
      <DndContext
        collisionDetection={collisionDetectionStrategy}
        measuring={measuring}
        sensors={sensors}
        {...handlers}
      >
        <SortableContext items={containers}>
          {containers.map((containerId) => (
            <KanbanColumn items={items[containerId]} key={containerId} id={containerId}>
              <SortableContext
                items={items[containerId].map((item) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                {items[containerId].map((item) => {
                  return <KanbanCard card={item} key={item.id} />;
                })}
              </SortableContext>
            </KanbanColumn>
          ))}
        </SortableContext>
        <DragOverlay adjustScale={false}>
          {activeId && activeId.toString().includes("item") ? (
            <KanbanCard card={findActiveTask(activeId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </Container>
  );
};
