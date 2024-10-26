import { PropsWithClassName } from "@/types/utils";
import { ReactNode } from "react";

export interface HeaderProps
  extends PropsWithClassName<{
    header: string;

    helperContent?: ReactNode;

    leftContent?: ReactNode;

    rightContent?: ReactNode;
  }> {}
