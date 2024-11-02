import { createGroup } from "@/api/request/group";
import { CreateGroupRequest } from "@/api/request/group/types";
import { ModalProps } from "@/components/common";
import { CREATE_GROUP_KEY, GET_ALL_GROUPS_KEY } from "@/constants";
import { TabelGroupModalType, TableGroupModalSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";

export const useNewTableGroupModal = ({ onOpenChange }: ModalProps) => {
    const queryClient = useQueryClient();
    const form = useForm<TabelGroupModalType>({
        resolver: zodResolver(TableGroupModalSchema),
    });

    const { mutate, isSuccess } = useMutation({
        onSuccess: () => queryClient.invalidateQueries({ queryKey: GET_ALL_GROUPS_KEY }),
        mutationKey: CREATE_GROUP_KEY,
        mutationFn: createGroup
    })

    const onSubmit = (fieldValues: FieldValues) => {
        mutate(fieldValues as CreateGroupRequest);
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
