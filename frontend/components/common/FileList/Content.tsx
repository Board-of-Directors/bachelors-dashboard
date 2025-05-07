import { AccordionPanel, Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { FileListProps } from "./FileList.types";

export const Content = ({ variant, children }: PropsWithChildren<FileListProps>) =>
  variant === "accordion" ? (
    <AccordionPanel>{children}</AccordionPanel>
  ) : (
    <Box
      borderColor="button.secondary"
      borderRadius="12px"
      borderWidth="1px"
      overflow="clip"
      w="100%"
    >
      {children}
    </Box>
  );
