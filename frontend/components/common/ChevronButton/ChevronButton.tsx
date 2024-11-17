import { ChevronDown, ChevronUp } from "lucide-react";
import { ChevronButtonProps } from "./ChevronButton.types";

const className = "text-icon-gray size-5";

export const ChevronButton = ({ isExpanded, toggle }: ChevronButtonProps) =>
  isExpanded ? (
    <ChevronUp className={className} onClick={toggle} />
  ) : (
    <ChevronDown className={className} onClick={toggle} />
  );
