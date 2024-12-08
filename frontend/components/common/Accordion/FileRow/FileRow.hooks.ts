import { ResponseFile } from "@/api/request/file/types";
import { useSortable } from "@dnd-kit/sortable";
import { useDisclosure } from "@nextui-org/react";
import { useRef, useState } from "react";
import { useHover } from "usehooks-ts";
import { DOCXFile, FileItem, XSLXFile } from "./FileRow.types";

import { useMergeRefs } from "@chakra-ui/react";
import { CSS } from "@dnd-kit/utilities";

export const useFileRow = (file: ResponseFile) => {
    const { attributes, listeners, setNodeRef, transition, transform } = useSortable({
        id: file.id,
    });

    const [tableToEdit, setTableToEdit] = useState<FileItem | null>(null);
    const hoverRef = useRef<HTMLLIElement>(null);
    const isHover = useHover(hoverRef);

    const {
        onOpenChange: onEditGroupOpenChange,
        onOpen: onEditGroupOpen,
        isOpen: isEditGroupOpen,
    } = useDisclosure();

    const style = {
        transition,
        transform: CSS.Translate.toString(transform),
    };

    const tableHref = `tables/${(file as any)?.tableId}`;
    const href = (file as any)?.href || tableHref;

    const refs = useMergeRefs(hoverRef, setNodeRef);

    const handleOpenEditModal = () => {
        setTableToEdit(file as any);
        onEditGroupOpen();
    };

    return {
        draggable: { attributes, listeners, style }, refs, href,
        disclosure: { isEditGroupOpen, onEditGroupOpenChange },
        handleOpenEditModal, tableToEdit, isHover
    }
}