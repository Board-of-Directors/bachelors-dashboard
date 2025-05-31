import { TableRowColor } from "@/api/request/table/types";
import { SelectItem } from "../../Select/Select.types";
import { colors } from "../RowTooltp/ColorPicker/ColorsPicker.data";

const defaultColor: SelectItem = {
  value: "transparent",
  label: "none",
};

export const createDefaultColor = (color: TableRowColor): SelectItem => {
  if (color === "WHITE") {
    return defaultColor;
  }

  return colors.find((selectColor) => selectColor.label === color);
};
