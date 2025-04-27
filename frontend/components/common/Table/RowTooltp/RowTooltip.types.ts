import { TooltipProps } from "@nextui-org/react";
import { ColorPickerProps } from "./ColorPicker/ColorPicker.types";

export interface RowTooltipProps extends Omit<TooltipProps, "content">, ColorPickerProps {}
