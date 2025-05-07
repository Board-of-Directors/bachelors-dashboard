import { SelectItem } from "@/components/common";
import { FileType } from "@/types/file";

export const toggleButtonItems: SelectItem<FileType>[] = [
  { value: "file", label: "Документ" },
  { value: "table", label: "Таблица" },
];
