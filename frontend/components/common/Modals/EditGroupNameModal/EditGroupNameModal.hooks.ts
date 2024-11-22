import { editGroup } from "@/api/request/group";
import { EditGroupRequest } from "@/api/request/group/types";
import { EDIT_GROUP_KEY, GET_ALL_GROUPS_KEY } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { EditGroupNameModalSchema, EditGroupNameModalType } from "./EditGroupNameModal.schema";
import { EditTableModalProps } from "./EditGroupNameModal.types";

export const useEditGroupNameModal = ({ folder: { name, id }, onOpenChange }: EditTableModalProps) => {
    const queryClient = useQueryClient();
    const form = useForm<EditGroupNameModalType>({
        resolver: zodResolver(EditGroupNameModalSchema),
        defaultValues: { name },
    });

    const { mutate, isSuccess } = useMutation({
        onSuccess: () => queryClient.invalidateQueries({ queryKey: GET_ALL_GROUPS_KEY }),
        mutationKey: EDIT_GROUP_KEY,
        mutationFn: editGroup
    })

    const onSubmit = ({ name }: FieldValues) => {
        mutate({ name, id } as EditGroupRequest);
    };

    useEffect(() => {
        if (isSuccess) {
            onOpenChange(false);
        }
    }, [isSuccess])

    return {
        form, onSubmit
    }
}