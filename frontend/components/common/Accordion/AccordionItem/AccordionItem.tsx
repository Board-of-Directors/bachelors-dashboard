"use client";

import { AccordionPanel, AccordionItem as ChakraAccordionItem } from "@chakra-ui/react";
import { AccordionButton } from "../AccordionButton/AccordionButton";
import { FileRow } from "../FileRow/FileRow";
import { AccordionItemProps } from "./AccordionItem.types";

export const AccordionItem = ({ folder: { name, files }, ...props }: AccordionItemProps) => (
  <ChakraAccordionItem>
    <AccordionButton name={name} {...props} />
    <AccordionPanel>
      {files.map((file, index) => (
        <FileRow file={file} key={index} />
      ))}
    </AccordionPanel>
  </ChakraAccordionItem>
);
