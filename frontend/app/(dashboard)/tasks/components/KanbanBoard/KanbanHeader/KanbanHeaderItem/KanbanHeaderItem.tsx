import { Text } from "@/components/common";
import { MoreVerticalIcon } from "lucide-react";
import { Container } from "./KanbanHeaderItem.styles";
import { KanbanHeaderItemProps } from "./KanbanHeaderItem.types";

export const KanbanHeaderItem = ({ length, name }: KanbanHeaderItemProps) => (
  <Container>
    <Text className="text-text-gray">{name + " (" + String(length) + ")"}</Text>
    <MoreVerticalIcon className="size-[18px] text-icon-gray" />
  </Container>
);
