import { ReactNode } from "react";
import { NavbarItemProps as NextNavbarItemProps } from "@nextui-org/react";

export interface NavbarItemProps extends NextNavbarItemProps {
  name: string;

  href: string;

  isActive?: boolean;

  icon?: ReactNode;
}
