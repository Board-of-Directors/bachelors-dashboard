import { Variant } from "./FileList.types";

export const getBorderTopStyles = (variant: Variant, index: number): string => {
  if (variant === "accordion") {
    return "1px";
  }

  return index === 0 ? "none !important" : "1px";
};
