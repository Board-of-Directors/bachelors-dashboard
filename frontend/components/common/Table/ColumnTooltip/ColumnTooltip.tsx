import { Tooltip } from "../../Tooltip/Tooltip";
import { ColumnTooltipProps } from "./ColumnTooltip.types";
import { Content } from "./Content/Content";

export const ColumnTooltip = ({ children, groups, ...props }: ColumnTooltipProps) => (
  <Tooltip content={<Content groups={groups} />} {...props}>
    {children}
  </Tooltip>
);
