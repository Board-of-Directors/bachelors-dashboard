"use client";

import { getAllGroups } from "@/api/request/group";
import { GetAllGroupsResponse } from "@/api/request/group/types";
import { GET_ALL_GROUPS_KEY } from "@/constants/queryKeys";
import { Accordion as ChakraAccordion } from "@chakra-ui/react";
import { DragEndEvent } from "@dnd-kit/core";
import { useQuery } from "@tanstack/react-query";
import { AccordionLoading } from "./Accordion.loading";
import { FolderListProps } from "./Accordion.types";
import { AccordionItem } from "./AccordionItem/AccordionItem";
import { FolderProps } from "./AccordionItem/AccordionItem.types";

export const Accordion = (props: FolderListProps) => {
  const { data, isLoading } = useQuery<GetAllGroupsResponse, Error>({
    queryKey: GET_ALL_GROUPS_KEY,
    queryFn: getAllGroups,
  });

  const handleDragEnd = (event: DragEndEvent) => console.log("event", event);

  if (isLoading || !data) {
    return <AccordionLoading />;
  }

  return (
    <ChakraAccordion allowToggle {...props}>
      {data.groups.map((folder, index) => (
        <AccordionItem folder={folder as FolderProps} key={index} />
      ))}
    </ChakraAccordion>
  );
};
