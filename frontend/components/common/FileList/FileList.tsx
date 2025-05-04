import { getGroupFiles } from "@/api/request/file";
import { ResponseFile } from "@/api/request/file/types";
import { FileRow } from "@/components/common/Accordion";
import { GET_GROUP_FILES_KEY } from "@/constants";
import { VStack } from "@chakra-ui/react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useQuery } from "@tanstack/react-query";
import { Content } from "./Content";
import { useFileList } from "./FileList.hooks";
import { FileListProps } from "./FileList.types";
import { getBorderTopStyles } from "./FileList.utils";
import { Header } from "./Header/Header";

/**
 * FileList component to display a list of files with drag-and-drop functionality.
 * @param {string} variant - The variant of the file list (default or accordion).
 * @param {number | undefined} folderId - The ID of the folder to fetch files from.
 * @returns {JSX.Element | null} - The rendered file list or null if not fetched.
 */
export const FileList = ({ variant = "accordion", folderId }: FileListProps) => {
  const { data, isFetchedAfterMount } = useQuery<ResponseFile[], Error>({
    queryKey: [GET_GROUP_FILES_KEY, "standalone"],
    queryFn: () => getGroupFiles(),
  });

  const [files, onDragEnd] = useFileList(folderId, data);

  return isFetchedAfterMount && files ? (
    <VStack padding={variant === "default" ? "40px" : "0px"} w="100%" alignItems="start" gap="20px">
      {variant === "default" ? <Header totalAmount={files.length} /> : null}
      <DndContext
        modifiers={[restrictToParentElement]}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
      >
        <SortableContext items={files.map(({ id }) => id)} strategy={verticalListSortingStrategy}>
          <Content variant={variant}>
            {files?.map((file, index) => (
              <FileRow
                borderTopWidth={getBorderTopStyles(variant, index)}
                key={file.id}
                file={file}
              />
            ))}
          </Content>
        </SortableContext>
      </DndContext>
    </VStack>
  ) : null;
};
