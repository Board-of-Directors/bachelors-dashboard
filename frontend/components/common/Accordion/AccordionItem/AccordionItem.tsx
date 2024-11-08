"use client";

import { AccordionPanel, AccordionItem as ChakraAccordionItem } from "@chakra-ui/react";
import { AccordionButton } from "../AccordionButton/AccordionButton";
import { FileRow } from "../FileRow/FileRow";
import { AccordionItemProps } from "./AccordionItem.types";

export const AccordionItem = ({ folder }: AccordionItemProps) => (
  <ChakraAccordionItem>
    <AccordionButton folder={folder} />
    <AccordionPanel>
      {folder?.files?.map((file, index) => <FileRow file={file} key={index} />)}
    </AccordionPanel>
  </ChakraAccordionItem>
);
