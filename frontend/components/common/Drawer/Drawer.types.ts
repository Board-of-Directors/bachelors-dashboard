import { HTMLAttributes } from "react";

export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, "size"> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}
