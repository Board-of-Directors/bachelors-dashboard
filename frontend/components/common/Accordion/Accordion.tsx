"use client";

import { getAllGroups } from "@/api/request/group";
import { GetAllGroupsResponse } from "@/api/request/group/types";
import { GET_ALL_GROUPS_KEY } from "@/constants/queryKeys";
import { Accordion as ChakraAccordion } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FolderListProps } from "./Accordion.types";
import { AccordionItem } from "./AccordionItem/AccordionItem";
import { FolderProps } from "./AccordionItem/AccordionItem.types";

export const Accordion = (props: FolderListProps) => {
  const { data, isLoading } = useQuery<GetAllGroupsResponse, Error>({
    queryKey: GET_ALL_GROUPS_KEY,
    queryFn: getAllGroups,
  });

  if (isLoading || !data) {
    return <>Loading..</>;
  }

  return (
    <>
      <ChakraAccordion allowMultiple allowToggle {...props}>
        {data.groups.map((folder, index) => (
          <AccordionItem folder={folder as FolderProps} key={index} />
        ))}
      </ChakraAccordion>
    </>
  );
};
