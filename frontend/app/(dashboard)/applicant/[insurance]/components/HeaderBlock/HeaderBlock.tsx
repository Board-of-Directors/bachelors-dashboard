import { Text } from "@/components/common";
import { Container, Header } from "./HeaderBlock.styles";
import { HeaderBlockProps } from "./HeaderBlock.types";

export const HeaderBlock = ({ header, rightContent, children }: HeaderBlockProps) => (
  <Container>
    {header ? (
      <Header>
        <Text className="text-[20px] font-semibold">{header}</Text>
        {rightContent}
      </Header>
    ) : null}
    {children}
  </Container>
);
