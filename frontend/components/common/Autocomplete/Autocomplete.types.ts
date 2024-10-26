import { AutocompleteProps as NextAutocompleteProps } from "@nextui-org/react";
import { SelectItem } from "../Select/Select.types";

interface AutocompleteProps extends Omit<NextAutocompleteProps, "children"> {}

interface AutocompleteItemType extends SelectItem {
  index: number;
}

export type { AutocompleteProps, AutocompleteItemType };
