"use client";

import { Text } from "@/components/common";
import { UserItem } from "@/components/common/UserList/UserItem/UserItem";
import dayjs from "dayjs";
import { useMemo } from "react";
import { DeadlineRow } from "./DeadlineRow";
import { Container } from "./KanbanCard.styles";
import { KanbanCardProps } from "./KanbanCard.types";
import { TagList } from "./TagList";

const DATE_FORMAT = "DD-MM-YYYY";

export const KanbanCard = ({ card, ...props }: KanbanCardProps) => {
  const { name, tags: tagNames, created, employee, deadline } = card;

  const tags = useMemo(() => tagNames.map((tag) => ({ label: tag, color: "#33FF57" })), [tagNames]);

  const assignees = [{ email: employee }];
  const startDate = dayjs(created).format(DATE_FORMAT);
  const endDate = dayjs(deadline).format(DATE_FORMAT);

  return (
    <Container {...props}>
      <Text className="text-text-gray">{status}</Text>
      {tags ? <TagList tags={tags} /> : null}
      {assignees ? <UserItem {...assignees[0]} /> : null}
      <Text className="text-medium text-text-back">{name}</Text>
      <DeadlineRow startDate={startDate} endDate={endDate} />
    </Container>
  );
};
