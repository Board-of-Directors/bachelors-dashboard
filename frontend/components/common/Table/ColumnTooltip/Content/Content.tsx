import { Box } from "@chakra-ui/react";
import { ContentProps } from "./Content.types";
import { Group } from "../Group/Group";

export const Content = ({ groups }: ContentProps) => (
  <Box w="full" display="flex" flexDirection="column">
    {groups.map((group, key) => (
      <Group {...group} key={key} />
    ))}
  </Box>
);
