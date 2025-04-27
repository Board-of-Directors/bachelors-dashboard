import { PropsWithChildren, ReactNode } from "react";

export interface HeaderBlockProps extends PropsWithChildren {
    header: string;
    rightContent?: ReactNode;
}