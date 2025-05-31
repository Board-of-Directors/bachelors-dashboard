import { FileType } from "@/types/file";
import { SelectItem } from "../Select/Select.types";

export interface ToggleButtonProps {
  onSelect: (value: FileType) => void;
  selectedItem: string;
  items: SelectItem[];
  label?: string;
}
