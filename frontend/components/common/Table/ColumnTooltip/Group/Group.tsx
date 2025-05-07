import { Box } from "@chakra-ui/react";
import { Text } from "../../../Text/Text";
import { Header, IconRow } from "./Group.styles";
import { GroupProps } from "./Group.types";
import { cloneElement } from "react";

export const Group = ({ header, items }: GroupProps) => (
  <Box w="full" display="flex" flexDirection="column">
    <Header>
      <Text className="text-sm text-text-gray">{header}</Text>
    </Header>
    {items.map(({ label, icon, onClick }) => (
      <IconRow onMouseDown={(event: any) => event.stopPropagation()} onClick={onClick} key={label}>
        {cloneElement(icon as any, {
          className: "size-[18px] text-icon-gray",
        })}
        <Text>{label}</Text>
      </IconRow>
    ))}
  </Box>
);
