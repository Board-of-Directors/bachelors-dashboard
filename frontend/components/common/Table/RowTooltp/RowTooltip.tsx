import { TooltipProps } from "@nextui-org/react";
import { Text } from "../../Text/Text";
import { Tooltip } from "../../Tooltip/Tooltip";
import { Header } from "../ColumnTooltip/Group/Group.styles";
import { ColorPicker } from "./ColorPicker/ColorPicker";
import { ColorPickerProps } from "./ColorPicker/ColorPicker.types";
import { Container } from "./RowTooltip.styles";

interface RowTooltipProps extends Omit<TooltipProps, "content">, ColorPickerProps {}

export const RowTooltip = ({ children, ...props }: RowTooltipProps) => (
  <Tooltip
    content={
      <Container>
        <Header>
          <Text className="text-text-gray">Цвет строки</Text>
        </Header>
        <ColorPicker {...props} />
      </Container>
    }
  >
    {children}
  </Tooltip>
);
