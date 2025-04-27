import { Text } from "@/components/common";
import { Container } from "./GridItem.styles";
import { GridItemProps } from "./GridItem.types";

export const GridItem = ({ header, description, ...props }: GridItemProps) => (
  <Container {...props}>
    <Text className="text-text-gray">{header}</Text>
    <Text className="text-text-back">{`${description} баллов`}</Text>
  </Container>
);
