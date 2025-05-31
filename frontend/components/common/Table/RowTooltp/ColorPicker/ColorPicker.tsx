import { Box } from "@chakra-ui/react";
import { ColorItem } from "./ColorItem/ColorItem";
import { ColorPickerProps } from "./ColorPicker.types";
import { colors } from "./ColorsPicker.data";

export const ColorPicker = ({ activeColor, onChangeColor }: ColorPickerProps) => (
  <Box padding="0 20px 12px 20px" width="full" display="inline-flex" gap="6px">
    {colors.map((color, key) => (
      <ColorItem
        isActive={activeColor?.value === color.value}
        onClick={() => onChangeColor(color)}
        color={color.value}
        key={key}
      />
    ))}
  </Box>
);
