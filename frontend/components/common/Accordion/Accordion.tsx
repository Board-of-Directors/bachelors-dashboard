"use client"

import { Accordion as ChakraAccordion } from "@chakra-ui/react";
import { EditGroupNameModal, ManageAccessModal } from "../Modals";
import { useFolderList } from "./Accordion.hooks";
import { FolderListProps } from "./Accordion.types";
import { AccordionItem } from "./AccordionItem/AccordionItem";

export const Accordion = ({ folders, ...props }: FolderListProps) => {
  const { states, actions, editGroupModalProps, manageAccessModalProps } = useFolderList();
  const { folderName, changingFolder } = states;

  return (
    <>
      {folderName !== undefined ? (
        <ManageAccessModal {...manageAccessModalProps} folderName={folderName} />
      ) : null}
      {changingFolder !== undefined ? (
        <EditGroupNameModal {...editGroupModalProps} folderName={changingFolder} />
      ) : null}
      <ChakraAccordion allowMultiple allowToggle {...props}>
        {folders.map((folder, index) => (
          <AccordionItem folder={folder} {...actions} key={index} />
        ))}
      </ChakraAccordion>
    </>
  );
};
