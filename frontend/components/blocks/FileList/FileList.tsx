import { getGroupFiles } from "@/api/request/file";
import { ResponseFile } from "@/api/request/file/types";
import { GET_GROUP_FILES_KEY } from "@/constants";
import { Box } from "@chakra-ui/react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useQuery } from "@tanstack/react-query";
import { FileRow } from "./FileRow/FileRow";

export const FileList = () => {
  const { data: files, isFetchedAfterMount } = useQuery<ResponseFile[], Error>({
    queryFn: () => getGroupFiles(),
    queryKey: GET_GROUP_FILES_KEY,
  });

  return isFetchedAfterMount && files ? (
    <DndContext
      modifiers={[restrictToParentElement]}
      collisionDetection={closestCenter}
      onDragEnd={() => {}}
    >
      <SortableContext items={files.map(({ id }) => id)} strategy={verticalListSortingStrategy}>
        <Box
          borderColor="button.secondary"
          borderRadius="12px"
          borderWidth="1px"
          overflow="clip"
          margin="40px"
        >
          {files?.map((file, index) => (
            <FileRow
              borderTopWidth={index === 0 ? "none !important" : "1px"}
              key={file.id}
              file={file}
            />
          ))}
        </Box>
      </SortableContext>
    </DndContext>
  ) : null;
};
