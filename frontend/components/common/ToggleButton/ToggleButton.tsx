import {
  ToggleGroup as RadixToggleGroup,
  ToggleGroupItem as RadixToggleGroupItem,
} from "@/components/ui/toggle-group";
import { cn } from "@/utils/cn";
import { chakra, VStack } from "@chakra-ui/react";
import { Text } from "../Text/Text";
import { ToggleButtonProps } from "./ToggleButton.types";

const ToggleGroupItem = chakra<typeof RadixToggleGroupItem, { isSelected: boolean }>(
  RadixToggleGroupItem,
  {
    baseStyle: ({ isSelected }: any) => ({
      height: "42px",
      widht: "100%",
      background: isSelected ? "background.neutral" : "transparent",
      color: isSelected ? "text.back" : "text.gray",
    }),
  },
);

/**
 * ToggleButton component
 * @param items - Array of items to be displayed as toggle buttons
 * @param onSelect - Callback function to handle item selection
 * @returns JSX.Element
 */
export const ToggleButton = ({ label, items, selectedItem, onSelect }: ToggleButtonProps) => (
  <VStack gap="8px" alignItems="start">
    {label ? <Text className="text-text-black text-sm font-medium">{label}</Text> : null}
    <RadixToggleGroup type="single">
      {items.map(({ label, value }, index, arr) => (
        <ToggleGroupItem
          variant="outline"
          className={cn({
            "rounded-l-none": index === arr.length - 1,
            "rounded-r-none !border-r-[0px]": index === 0,
          })}
          isSelected={selectedItem === value}
          onClick={() => onSelect(value)}
          value={value}
          key={value}
        >
          {label}
        </ToggleGroupItem>
      ))}
    </RadixToggleGroup>
  </VStack>
);
