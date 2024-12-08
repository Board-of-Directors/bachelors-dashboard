import { ControlGroup as Container, ControlItem } from "./ControlGroup.styles";
import { ControlGroupProps } from "./ControlGroup.types";

export const ControlGroup = ({ items }: ControlGroupProps) => (
  <Container>
    {items.map((item, key) => (
      <ControlItem isSelected={item.isActive} onClick={item.onClick} key={key}>
        {item.icon}
      </ControlItem>
    ))}
  </Container>
);
