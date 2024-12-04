import { Text } from "@/components/common";
import { Calendar, UserRound } from "lucide-react";
import { Circle, Container, IconContainer, Row } from "./DeadlineRow.styles";

export const UserDeadline = () => (
  <Container>
    <Row>
      <IconContainer>
        <UserRound className="text-text-gray size-[18px]" />
      </IconContainer>
      <Text className="text-text-gray">zykova@g.nsu.ru</Text>
    </Row>
    <Circle />
    <Row>
      <Calendar className="text-text-gray size-[18px]" />
      <Text className="text-text-gray">10.12.2024</Text>
    </Row>
  </Container>
);
