"use client"

import { createTask } from "@/api/request/task";
import { CreateTaskRequest } from "@/api/request/task/types";
import { useSnackbar } from "@/components/common";
import { CREATE_TASK_KEY, GET_ALL_TASKS_QUERY } from "@/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEditor } from "@tiptap/react";
import { FieldValues, useFormContext } from "react-hook-form";
import { useToggle } from "usehooks-ts";
import { TaskSchemaType } from "../TaskSchema";
import { createConfig } from "./DescriptionBlock.config";

export const useDescriptionBlock = (onClose: () => void) => {
  const [isEditMode, toggleEditMode] = useToggle(false);

  const {
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<TaskSchemaType>();

  const editor = useEditor(createConfig(getValues("description")));
  const queryClient = useQueryClient();

  const showErrorSnackbar = useSnackbar({
    description: "У задачи должны быть заполнены заголовок и описание",
    header: "Произошла ошибка",
    variant: "danger",
  });

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: GET_ALL_TASKS_QUERY });
    onClose();
  };

  const createTaskMutation = useMutation({
    mutationKey: CREATE_TASK_KEY,
    mutationFn: (data: CreateTaskRequest) => createTask(data),
    onSuccess: handleSuccess,
  });

  const onSubmit = (fieldValues: FieldValues) => {
    createTaskMutation.mutate({
      ...fieldValues,
      deadline: "2024-12-23",
      tags: undefined,
    } as CreateTaskRequest);
  };

  return {
    states: { isEditMode, isSubmitting, editor },
    actions: { toggleEditMode, handleSubmit: handleSubmit(onSubmit, showErrorSnackbar) },
  };
};
