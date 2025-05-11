import { PropsWithChildren } from "react";

export interface WrapperProps
  extends PropsWithChildren<{
    className?: string;
  }> {}

export type PropsWithClassName<T> = T & {
  className?: string;
};

export type ControlledWrapper<T> = T & {
  name: string;
};

export type Maybe<T> = T | undefined;

export type BaseStyleWithProps<T> = any & T;

export type SortStrategy = "none" | "asc" | "desc";
export type Color = "none" | "danger" | "warning" | "success" | "info";
