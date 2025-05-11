"use client";

import dayjs from "dayjs";
import { Text } from "../Text/Text";
import { ArrowIcon, Bullet, Container, Header, Row } from "./HistoryCard.styles";
import { HistoryCardProps } from "./HistoryCard.types";

import "dayjs/locale/ru";
import { useRef } from "react";
import { useHover } from "usehooks-ts";

dayjs.locale("ru");

export const HistoryCard = ({ lastDate, count, name }: HistoryCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(containerRef);

  return (
    <Container ref={containerRef}>
      <Header>{name}</Header>
      <Row>
        <Text>Последнее изменение {dayjs(lastDate).format("DD.MM.YYYY")}</Text>
        <Bullet />
        <Text>{count} изменений</Text>
      </Row>
      {isHover ? <ArrowIcon className="size-6 stroke-indicator-info" /> : null}
    </Container>
  );
};
