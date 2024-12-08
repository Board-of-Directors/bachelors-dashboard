import { Key, ReactNode } from "react";

interface ControlItem {
  icon: ReactNode;
  onClick: () => void;
  isActive: boolean;
  id: Key;
}

interface ControlGroupProps {
  items: ControlItem[];
}

export type { ControlGroupProps, ControlItem };
