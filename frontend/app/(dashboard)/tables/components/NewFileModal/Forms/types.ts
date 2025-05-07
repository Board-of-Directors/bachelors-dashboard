import { SelectItem } from "@/components/common";

export interface FormProps {
  selectItems: SelectItem<string>[];
  onSuccess: () => void;
}
