import { PropsWithChildren, ReactNode } from "react";

export interface HeaderBlockProps extends PropsWithChildren {
    rightContent?: ReactNode;
    header?: string;
}