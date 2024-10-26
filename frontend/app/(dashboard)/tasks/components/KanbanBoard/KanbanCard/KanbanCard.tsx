import { Text } from "@/components/common";
import { UserItem } from "@/components/common/UserList/UserItem/UserItem";
import { Task } from "@/types/task";
import { BoxProps } from "@chakra-ui/react";
import { DeadlineRow } from "./DeadlineRow/DeadlineRow";
import { Container } from "./KanbanCard.styles";
import { TagList } from "./TagList/TagList";

interface KanbanCardProps extends BoxProps {
  card: Task;
}

// TODO: convertStatusToHeaderFunction
export const KanbanCard = ({ card, ...props }: KanbanCardProps) => {
  const { status, startDate, endDate, assignees, header, tags, id } = card;

  return (
    <Container {...props}>
      <Text className="text-text-gray">{status}</Text>
      {tags ? <TagList tags={tags} /> : null}
      {assignees ? <UserItem {...assignees[0]} /> : null}
      <Text className="text-medium text-text-back">{header}</Text>
      <DeadlineRow startDate={startDate} endDate={endDate} />
    </Container>
  );
};
