import { UserRound } from "lucide-react";
import { Text } from "../../Text/Text";
import { Circle, Column, Container, DefaultAvatar, InfoRow, UserAvatar } from "./Comment.styles";
import { CommnetProps } from "./Comment.types";

export const Comment = ({ message, date, employee }: CommnetProps) => (
  <Container>
    {employee?.photo ? (
      <UserAvatar src={employee?.photo} />
    ) : (
      <DefaultAvatar>
        <UserRound className="text-icon-gray size-[18px]" />
      </DefaultAvatar>
    )}
    <Column>
      <InfoRow>
        <Text className="text-sm text-text-gray">{date}</Text>
        <Circle />
        <Text className="text-sm text-text-gray">{employee.email}</Text>
      </InfoRow>
      <Text className="font-medium">{message}</Text>
    </Column>
  </Container>
);
