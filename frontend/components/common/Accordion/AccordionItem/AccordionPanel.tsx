import { getGroupFiles } from "@/api/request/file";
import { ResponseFile } from "@/api/request/file/types";
import { GET_GROUP_FILES } from "@/constants/queryKeys";
import { AccordionPanel as ChakraAccordionPanel } from "@chakra-ui/react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useQuery } from "@tanstack/react-query";
import { FileRow } from "../FileRow/FileRow";
import { Loading } from "../FileRow/FileRow.loading";
import { FolderProps } from "./AccordionItem.types";

interface AccordionPanelProps {
  folder: FolderProps;
}

export const AccordionPanel = ({ folder }: AccordionPanelProps) => {
  const {
    data: files,
    isLoading,
    isFetchedAfterMount,
  } = useQuery<ResponseFile[], Error>({
    queryFn: () => getGroupFiles(folder.id),
    queryKey: GET_GROUP_FILES,
  });

  const handleDragEnd = () => {};

  if (isLoading || !isFetchedAfterMount) {
    return <Loading />;
  }

  return (
    <DndContext
      modifiers={[restrictToParentElement]}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={files.map(({ id }) => id)} strategy={verticalListSortingStrategy}>
        <ChakraAccordionPanel>
          {files?.map((file) => <FileRow file={file} key={file.id} />)}
        </ChakraAccordionPanel>
      </SortableContext>
    </DndContext>
  );
};
