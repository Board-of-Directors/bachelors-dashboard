"use client";

import { Accordion, FileList } from "@/components/common";
import { DragEndEvent } from "@dnd-kit/core";
import { FileManagerProvider, useFileManager } from "./FileManager.context";

const FileManagerContent = () => {
  const { files, moveFile } = useFileManager();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const fileId = Number(active.id);
      const targetFolderId = Number(over.id);
      moveFile(fileId, targetFolderId);
    }
  };

  return (
    <>
      <Accordion mx="40px" />
      <FileList variant="default" />
    </>
  );
};

export const FileManager = () => {
  return (
    <FileManagerProvider>
      <FileManagerContent />
    </FileManagerProvider>
  );
};
