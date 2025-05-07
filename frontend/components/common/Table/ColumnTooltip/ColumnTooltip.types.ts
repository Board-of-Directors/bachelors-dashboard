import { TooltipProps } from "@nextui-org/react";
import { ContentProps } from "./Content/Content.types";

export interface ColumnTooltipProps extends Omit<TooltipProps, "content">, ContentProps {}
