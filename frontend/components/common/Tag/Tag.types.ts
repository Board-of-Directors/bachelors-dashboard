import { ChipProps } from "@nextui-org/react";

interface TagColors {
  backgroundColor: string;
  textColor: string;
}

type TagProps = Omit<ChipProps, "color"> & TagColors;

export type { TagColors, TagProps };
