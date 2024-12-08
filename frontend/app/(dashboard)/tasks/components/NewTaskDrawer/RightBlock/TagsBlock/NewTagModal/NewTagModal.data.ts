import { SelectItem } from "@/components/common";

export const colors: SelectItem<any>[] = [
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
