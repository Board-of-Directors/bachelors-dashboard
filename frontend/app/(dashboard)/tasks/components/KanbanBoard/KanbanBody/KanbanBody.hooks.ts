import {
    closestCenter,
    CollisionDetection,
    DragOverEvent,
    DragStartEvent,
    getFirstCollision,
    KeyboardSensor,
    MouseSensor,
    pointerWithin,
    rectIntersection,
    TouchSensor,
    UniqueIdentifier,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {
    arrayMove
} from "@dnd-kit/sortable";
import { coordinateGetter } from "./KanbanBody.utils";

import { Task } from "@/types/task";
import { Maybe } from "@/types/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { KanbanBodyProps } from "./KanbanBody.types";

export const useKanban = ({ columns: items, onChangeColumns: setItems }: KanbanBodyProps) => {

    const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
    const lastOverId = useRef<UniqueIdentifier | null>(null);
    const recentlyMovedToNewContainer = useRef(false);
    const containers = Object.keys(items);

    const findActiveTask = (activeId: UniqueIdentifier): Maybe<Task> => {
        let activeTask: Maybe<Task> = null;

        Object.keys(items).forEach((id) =>
            items[id].forEach((task) => {
                if (task.id === activeId) {
                    activeTask = task;
                }
            }),
        );

        return activeTask;
    };

    const collisionDetectionStrategy: CollisionDetection = useCallback(
        (args) => {
            if (activeId && activeId in items) {
                return closestCenter({
                    ...args,
                    droppableContainers: args.droppableContainers.filter(
                        (container) => container.id in items,
                    ),
                });
            }

            const pointerIntersections = pointerWithin(args);
            const intersections =
                pointerIntersections.length > 0 ? pointerIntersections : rectIntersection(args);

            let overId = getFirstCollision(intersections, "id");

            if (overId != null) {
                if (overId in items) {
                    const containerItems = items[overId].map((i => i.id));

                    if (containerItems.length > 0) {
                        overId = closestCenter({
                            ...args,
                            droppableContainers: args.droppableContainers.filter(
                                (container) => container.id !== overId && containerItems.includes(container.id),
                            ),
                        })[0]?.id;
                    }
                }

                lastOverId.current = overId;

                return [{ id: overId }];
            }

            if (recentlyMovedToNewContainer.current) {
                lastOverId.current = activeId;
            }

            return lastOverId.current ? [{ id: lastOverId.current }] : [];
        },
        [activeId, items],
    );

    const [clonedItems, setClonedItems] = useState<any | null>(null);

    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter,
        }),
    );

    const findContainer = (id: UniqueIdentifier) => {
        if (id in items) {
            return id;
        }

        return Object.keys(items).find((key) => items[key].map((i) => i.id).includes(id));
    };

    const getIndex = (id: UniqueIdentifier) => {
        const container = findContainer(id);

        if (!container) {
            return -1;
        }

        const index = items[container].map((i) => i.id).indexOf(id);

        return index;
    };

    const onDragCancel = () => {
        if (clonedItems) {
            setItems(clonedItems);
        }

        setActiveId(null);
        setClonedItems(null);
    };

    const onDragStart = ({ active }: DragStartEvent) => {
        setActiveId(active.id);
        setClonedItems(items);
    };

    const onDragOver = ({ active, over }: DragOverEvent) => {
        const overId = over?.id;

        if (overId == null || active.id in items) {
            return;
        }

        const overContainer = findContainer(overId);
        const activeContainer = findContainer(active.id);

        if (!overContainer || !activeContainer) {
            return;
        }

        if (activeContainer !== overContainer) {
            setItems((items) => {
                const activeItems = items[activeContainer].map(i => i.id);
                const overItems = items[overContainer].map(i => i.id);

                const overIndex = overItems.indexOf(overId);
                const activeIndex = activeItems.indexOf(active.id);

                let newIndex: number;

                if (overId in items) {
                    newIndex = overItems.length + 1;
                } else {
                    const isBelowOverItem =
                        over &&
                        active.rect.current.translated &&
                        active.rect.current.translated.top > over.rect.top + over.rect.height;

                    const modifier = isBelowOverItem ? 1 : 0;

                    newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
                }

                recentlyMovedToNewContainer.current = true;

                return {
                    ...items,
                    [activeContainer]: items[activeContainer].filter((item) => item.id !== active.id),
                    [overContainer]: [
                        ...items[overContainer].slice(0, newIndex),
                        items[activeContainer][activeIndex],
                        ...items[overContainer].slice(newIndex, items[overContainer].length),
                    ],
                };
            });
        }
    };

    const onDragEnd = ({ active, over }) => {
        const activeContainer = findContainer(active.id);

        if (!activeContainer) {
            setActiveId(null);
            return;
        }

        const overId = over?.id;

        if (overId == null) {
            setActiveId(null);
            return;
        }

        const overContainer = findContainer(overId);

        if (overContainer) {
            const activeIndex = items[activeContainer].map(i => i.id).indexOf(active.id);
            const overIndex = items[overContainer].map(i => i.id).indexOf(overId);

            if (activeIndex !== overIndex) {
                setItems((items) => ({
                    ...items,
                    [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex),
                }));
            }
        }

        setActiveId(null);
    };

    useEffect(() => {
        requestAnimationFrame(() => {
            recentlyMovedToNewContainer.current = false;
        });
    }, [items]);

    return {
        handlers: {
            onDragCancel,
            onDragEnd,
            onDragOver,
            onDragStart,
        },
        getIndex,
        collisionDetectionStrategy,
        findActiveTask,
        sensors,
        containers,
        activeId,
        items,
    }
}