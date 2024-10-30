import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";

export const useFolderList = () => {
    const [folderName, selectFolderName] = useState<string | undefined>(undefined);
    const [changingFolder, selectChangingFolder] = useState<string | undefined>(undefined);

    const {
        onOpen: onOpenManageAccessModal,
        isOpen: isOpenManageAccessModal,
        onOpenChange: onManageAccessModalOpenChange,
    } = useDisclosure();

    const {
        onOpen: onOpenEditGroupNameModal,
        isOpen: isOpenEditGroupNameModal,
        onOpenChange: onOpenEditGroupNameOpenChange,
    } = useDisclosure();

    const onManageAccessClick = (name: string) => {
        selectFolderName(name);
        onOpenManageAccessModal();
    };

    const onEditGroupNameClick = (name: string) => {
        selectChangingFolder(name);
        onOpenEditGroupNameModal();
    };

    return {
        states: {
            folderName,
            changingFolder,
        },
        actions: {
            onEditGroupNameClick,
            onManageAccessClick,
        },
        editGroupModalProps: {
            isOpen: isOpenEditGroupNameModal,
            onOpenChange: onOpenEditGroupNameOpenChange
        },
        manageAccessModalProps: {
            isOpen: isOpenManageAccessModal,
            onOpenChange: onManageAccessModalOpenChange
        }
    }
}