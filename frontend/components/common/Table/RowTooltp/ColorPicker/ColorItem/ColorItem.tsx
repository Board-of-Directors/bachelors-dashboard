import { CheckIcon } from "lucide-react";
import { Container } from "./ColorItem.styles";
import { ColorItemProps } from "./ColorItem.types";

export const ColorItem = ({ color, isActive, ...props }: ColorItemProps) => (
  <Container color={color} {...props}>
    {isActive ? <CheckIcon className="size-[14px] stroke-[4px] text-text-back" /> : null}
  </Container>
);
