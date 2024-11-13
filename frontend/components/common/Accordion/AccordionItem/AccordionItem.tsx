"use client";

import { AccordionItem as ChakraAccordionItem } from "@chakra-ui/react";
import { AccordionButton } from "../AccordionButton/AccordionButton";
import { AccordionItemProps } from "./AccordionItem.types";

import { AccordionPanel } from "./AccordionPanel";

export const AccordionItem = ({ folder }: AccordionItemProps) => (
  <ChakraAccordionItem>
    {({ isExpanded }) => (
      <>
        <AccordionButton folder={folder} />
        {isExpanded ? <AccordionPanel folderId={folder.id} /> : null}
      </>
    )}
  </ChakraAccordionItem>
);
