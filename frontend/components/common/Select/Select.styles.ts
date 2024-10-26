import { SlotsToClasses } from "@nextui-org/react";

export const mainClassNames: SlotsToClasses<"label" | "mainWrapper" | "trigger"> = {
  label: "text-text-black pb-3",
  mainWrapper: "text-text-gray text-base placeholder:text-text-gray hover:bg-transparent",
  trigger: [
    "rounded-[5px] hover:bg-transparent",
    "bg-transparent border-button-secondary border-2 shadow-none",
    "group-hover:bg-transparent group-hover:border-indicator-info",
    "group-data-[focus=true]:bg-transparent px-5 py-4 !h-fit",
  ],
};
