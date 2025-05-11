"use client";

import { Text } from "@/components/common";
import { UserItem } from "@/components/common/UserList/UserItem/UserItem";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDisclosure } from "@nextui-org/react";
import dayjs from "dayjs";
import { MenuIcon } from "lucide-react";
import { CSSProperties, useMemo } from "react";
import { useBoolean } from "usehooks-ts";
import { TaskDrawer } from "../../../../app/(dashboard)/tasks/components/TaskDrawer/TaskDrawer";
import { DeadlineRow } from "./DeadlineRow";
import { Container } from "./KanbanCard.styles";
import { KanbanCardProps } from "./KanbanCard.types";
import { TagList } from "./TagList";

const DATE_FORMAT = "DD-MM-YYYY";

export const KanbanCard = ({ card, ...props }: KanbanCardProps) => {
  const { value: isHover, setFalse, setTrue } = useBoolean(false);
  const { name, tags: tagNames, created, employee, deadline, id } = card;

  const {
    onOpenChange: onTaslPopupOpenChange,
    onOpen: onTaskPopupOpen,
    isOpen: isTaskPopupOpen,
  } = useDisclosure();

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? "0.5" : "1",
    transition,
  };

  const tags = useMemo(() => tagNames.map((tag) => ({ label: tag, color: "#33FF57" })), [tagNames]);

  const assignees = [{ email: employee }];
  const startDate = dayjs(created).format(DATE_FORMAT);
  const endDate = dayjs(deadline).format(DATE_FORMAT);

  return (
    <>
      <TaskDrawer onOpenChange={onTaslPopupOpenChange} isOpen={isTaskPopupOpen} />
      <Container
        onClick={onTaskPopupOpen}
        onMouseLeave={setFalse}
        onMouseOver={setTrue}
        ref={setNodeRef}
        {...attributes}
        style={style}
        {...props}
      >
        {isHover ? (
          <MenuIcon className="absolute right-5 top-5 size-[18px] text-icon-gray" {...listeners} />
        ) : null}
        {tags.length ? <TagList tags={tags as any} /> : null}
        {assignees ? <UserItem {...assignees[0]} /> : null}
        <Text className="text-medium text-text-back">{name}</Text>
        <DeadlineRow startDate={startDate} endDate={endDate} />
      </Container>
    </>
  );
};
