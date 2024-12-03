import { HStack } from "@chakra-ui/react";
import { XIcon } from "lucide-react";
import { Container, Description, Header, IconContainer, Title } from "./Alert.styles";
import { AlertProps } from "./Alert.types";
import { AlertColorScheme, AlertIconScheme } from "./Alert.utils";

export const Alert = ({ variant = "success", header, description, onClose }: AlertProps) => {
  const [bgColor, textColor] = AlertColorScheme[variant];

  return (
    <Container background={bgColor}>
      <Header>
        <HStack>
          <IconContainer iconColor={textColor}>{AlertIconScheme[variant]}</IconContainer>
          <Title color={textColor}>{header}</Title>
        </HStack>
        {onClose ? (
          <IconContainer w="20px" h="20px" opacity="50%" iconColor={textColor} onClick={onClose}>
            <XIcon />
          </IconContainer>
        ) : null}
      </Header>
      <Description color={textColor}>{description}</Description>
    </Container>
  );
};
