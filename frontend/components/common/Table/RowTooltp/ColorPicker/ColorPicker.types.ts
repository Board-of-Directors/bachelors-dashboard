import { SelectItem } from "@/components/common/Select/Select.types";
import { Maybe } from "@/types/utils";

export interface ColorPickerProps {
  activeColor: Maybe<SelectItem>;
  onChangeColor: (color: SelectItem) => void;
}
