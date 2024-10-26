import { Select as NextSelect, SelectItem } from "@nextui-org/react";
import { ChevronDownIcon } from "lucide-react";
import { useMemo } from "react";
import { autocompleteItemProps, popoverProps } from "../Autocomplete/Autocomplete.styles";
import { mainClassNames } from "./Select.styles";
import { SelectProps } from "./Select.types";

export const Select = ({
  items,
  selectedItems,
  selectionMode,
  onChange,
  ...props
}: SelectProps) => {
  const selectedKeys = useMemo(() => {

    const labels = selectedItems?.map((item) => item.label) ?? [];

    return new Set([...labels]);
  }, [selectedItems]);

  const handleChange = (label: string) => {
    const changedItem = items.find((item) => item.label === label);

    if (!changedItem) {
      throw new Error(`Элемента списка с названием ${label} не существует.`);
    }

    if (selectionMode === "multiple") {
      if (selectedKeys.has(label)) {
        onChange(selectedItems.filter((item) => item.label !== label));
      } else {
        onChange([...selectedItems, changedItem]);
      }
    } else {
      if (selectedKeys.has(label)) {
        onChange([]);
      } else {
        onChange([changedItem]);
      }
    }
  };

  return (
    <NextSelect
      {...props}
      selectorIcon={<ChevronDownIcon className="text-icon-gray size-[18px]" />}
      popoverProps={popoverProps}
      classNames={mainClassNames}
      selectedKeys={selectedKeys}
      selectionMode={selectionMode}
      labelPlacement="outside"
      radius="sm"
    >
      {items?.map(({ label }) => (
        <SelectItem
          classNames={autocompleteItemProps}
          onClick={() => handleChange(label)}
          key={label}
        >
          {label}
        </SelectItem>
      ))}
    </NextSelect>
  );
};
