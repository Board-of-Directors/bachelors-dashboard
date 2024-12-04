import { SelectItem } from "@/components/common";
import { TagColors } from "@/components/common/Tag";

export const colors: SelectItem<TagColors>[] = [
  {
    label: "Срочный",
    value: {
      textColor: "#ED942C",
      backgroundColor: "background-warning",
    },
  },
  {
    label: "Критичный",
    value: {
      textColor: "#EB6B2E",
      backgroundColor: "background-danger",
    },
  },
  {
    label: "Нейтральный",
    value: {
      textColor: "#a6a6a6",
      backgroundColor: "button-secondary",
    },
  },
];
