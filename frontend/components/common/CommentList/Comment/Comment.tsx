import dayjs from "dayjs";
import "dayjs/locale/ru";

import { UserRound } from "lucide-react";
import { Text } from "../../Text/Text";
import { Circle, Column, Container, DefaultAvatar, InfoRow } from "./Comment.styles";
import { CommnetProps } from "./Comment.types";

dayjs.locale("ru");

export const Comment = ({ id, authorEmail, content }: CommnetProps) => (
  <Container>
    <DefaultAvatar>
      <UserRound className="text-icon-gray size-[18px]" />
    </DefaultAvatar>
    <Column>
      <InfoRow>
        <Text className="text-sm text-text-gray">{authorEmail}</Text>
        <Circle />
        <Text className="text-sm text-text-gray">{dayjs().format("DD.MM.YYYY")}</Text>
      </InfoRow>
      <Text className="font-medium">{content}</Text>
    </Column>
  </Container>
);
