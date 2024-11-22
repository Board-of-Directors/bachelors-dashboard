import { deleteGroup, editGroup } from "@/api/request/group";
import { DELETE_GROUP_KEY, EDIT_GROUP_KEY, GET_ALL_GROUPS_KEY } from "@/constants";
import { useDisclosure } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAccordionButton = (id: number) => {
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

    const queryClient = useQueryClient();

    const deleteGroupMutation = useMutation({
        onSuccess: () => queryClient.invalidateQueries({ queryKey: GET_ALL_GROUPS_KEY }),
        mutationKey: DELETE_GROUP_KEY,
        mutationFn: deleteGroup
    })

    const editGroupMutation = useMutation({
        onSuccess: () => queryClient.invalidateQueries({ queryKey: GET_ALL_GROUPS_KEY }),
        mutationKey: EDIT_GROUP_KEY,
        mutationFn: editGroup
    })

    const handleDeleteGroup = () => deleteGroupMutation.mutate(id);

    return {
        actions: {
            handleDeleteGroup,
            onOpenManageAccessModal,
            onOpenEditGroupNameModal
        },
        editGroupModalProps: {
            onOpenChange: onOpenEditGroupNameOpenChange,
            isOpen: isOpenEditGroupNameModal,
        },
        manageAccessModalProps: {
            onOpenChange: onManageAccessModalOpenChange,
            isOpen: isOpenManageAccessModal,
        },
    };
}