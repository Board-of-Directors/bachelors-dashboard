import {
    AutocompleteItem,
    Autocomplete as NextAutocomplete
} from "@nextui-org/react";
import { ChevronDownIcon } from "lucide-react";
import { autocompleteItemProps, inputProps, popoverProps } from "./Autocomplete.styles";
import { AutocompleteItemType, AutocompleteProps } from "./Autocomplete.types";

export const Autocomplete = ({
  defaultItems,
  label,
  placeholder,
  selectedKey,
  onSelectionChange,
}: AutocompleteProps) => (
  <NextAutocomplete
    selectorIcon={<ChevronDownIcon className="text-icon-gray size-[18px]" />}
    onSelectionChange={onSelectionChange}
    defaultItems={defaultItems as any}
    popoverProps={popoverProps}
    selectedKey={selectedKey}
    placeholder={placeholder}
    inputProps={inputProps}
    labelPlacement="outside"
    label={label}
    radius="sm"
  >
    {(item: AutocompleteItemType) => (
      <AutocompleteItem key={item.index} classNames={autocompleteItemProps}>
        {item.label}
      </AutocompleteItem>
    )}
  </NextAutocomplete>
);
