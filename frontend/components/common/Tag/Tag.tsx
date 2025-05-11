import { BaseStyleWithProps } from "@/types/utils";
import { chakra } from "@chakra-ui/react";
import { Chip } from "@nextui-org/react";
import { XIcon } from "lucide-react";
import { getClassNames } from "./Tag.styles";
import { TagProps } from "./Tag.types";

const StyledChip = chakra<typeof Chip, { color: string }>(Chip, {
  baseStyle: ({ color }: BaseStyleWithProps<{ color: string }>) => ({
    color: color
  })
})

export const Tag = ({ backgroundColor, textColor, ...props }: TagProps) => (
  <StyledChip
    classNames={getClassNames(backgroundColor, textColor)}
    endContent={<XIcon className={`size-[16px]`} />}
    color={textColor}
    {...props}
  />
);
