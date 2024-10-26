import { PropsWithChildren } from "react";

interface WrapperProps
  extends PropsWithChildren<{
    className?: string;
  }> {}

type PropsWithClassName<T> = T & {
  className?: string;
};

type ControlledWrapper<T> = T & {
  name: string;
};

type Maybe<T> = T | undefined;

type BaseStyleWithProps<T> = any & T;

type SortStrategy = "none" | "asc" | "desc";
type Color = "none" | "danger" | "warning" | "success" | "info";

export type {
  WrapperProps,
  PropsWithClassName,
  ControlledWrapper,
  BaseStyleWithProps,
  SortStrategy,
  Color,
  Maybe,
};
