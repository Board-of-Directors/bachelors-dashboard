import { SelectProps as NextSelectProps } from "@nextui-org/react";

interface SelectItem<T = any> {
  label: string;
  value: T;
}

interface SelectProps extends Omit<NextSelectProps, "items" | "children" | "onChange"> {
  items: SelectItem[];
  selectedItems: SelectItem[];
  onChange: (changed: SelectItem[] | SelectItem) => void;
}

export type { SelectItem, SelectProps };
