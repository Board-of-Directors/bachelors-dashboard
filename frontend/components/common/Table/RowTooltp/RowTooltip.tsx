import { Text } from "../../Text/Text";
import { Tooltip } from "../../Tooltip/Tooltip";
import { Header } from "../ColumnTooltip/Group/Group.styles";
import { ColorPicker } from "./ColorPicker/ColorPicker";
import { Container } from "./RowTooltip.styles";
import { RowTooltipProps } from "./RowTooltip.types";

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
