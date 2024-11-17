import { Color } from "@/types/utils";
import { BoxProps } from "@chakra-ui/react";

export interface ColorItemProps extends BoxProps {
  color: Color;
  isActive: boolean;
}
