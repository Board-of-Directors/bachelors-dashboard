import { InputProps, PopoverProps, SlotsToClasses } from "@nextui-org/react";

const inputProps: Partial<InputProps> = {
  classNames: {
    label: "text-text-black pb-3",
    input: "text-text-gray text-base placeholder:text-text-gray hover:bg-transparent",
    innerWrapper: "bg-transparent rounded-[5px] hover:bg-transparent",
    inputWrapper: [
      "bg-transparent border-button-secondary border-2 shadow-none",
      "group-hover:bg-transparent group-hover:border-indicator-info",
      "group-data-[focus=true]:bg-transparent px-5 py-3 !h-fit",
    ],
  },
};

const popoverProps: Partial<PopoverProps> = {
  offset: 16,
  placement: "bottom",
  classNames: {
    base: "rounded-[7px]",
    content: "rounded-[7px]",
  },
};

const autocompleteItemProps: SlotsToClasses<"base"> = {
  base: [
    "p-4 rounded-[5px]",
    "text-text-gray",
    "transition-opacity",
    "data-[hover=true]:text-text-back",
    "data-[pressed=true]:opacity-70",
    "data-[hover=true]:bg-button-secondary",
    "data-[selectable=true]:focus:bg-default-100",
    "data-[focus-visible=true]:ring-default-500",
  ],
};

export { inputProps, popoverProps, autocompleteItemProps };
