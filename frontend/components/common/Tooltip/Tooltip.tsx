import { Tooltip as NextTooltip, TooltipProps as NextTooltipProps } from "@nextui-org/react";
import { tooltipClassName } from "./Tooltip.styles";

interface TooltipProps extends NextTooltipProps {}

export const Tooltip = ({ children, content, ...props }: TooltipProps) => (
  <NextTooltip content={content} classNames={tooltipClassName} {...props}>
    {children}
  </NextTooltip>
);
