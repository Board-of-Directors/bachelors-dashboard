import { orderFiles } from "@/api/request/file";
import { ResponseFile } from "@/api/request/file/types";
import { ORDER_FILES_KEY } from "@/constants";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useAccordionItem = (groupId: number, items: ResponseFile[]) => {
    const [files, setFiles] = useState<ResponseFile[]>();
    const queryClient = useQueryClient();

    const orderFilesMutate = useMutation({
        mutationFn: (ids: { id: number }[]) => orderFiles({ groupId: groupId, ids: ids }),
        onSuccess: () => queryClient.invalidateQueries(),
        mutationKey: ORDER_FILES_KEY,
    })

    const handleDragEnd = ({ active, over }: DragEndEvent) => {
        if (active.id !== over.id) {
            const activeIndex = files.findIndex(({ id }) => id === active.id);
            const overIndex = files.findIndex(({ id }) => id === over.id);
            const newFiles = arrayMove(files, activeIndex, overIndex);

            orderFilesMutate.mutate(newFiles.map(({ id }) => ({ id: id })));

            setFiles(newFiles);
        }
    }

    useEffect(() => setFiles(items), [items]);

    return [files, handleDragEnd] as const;
}