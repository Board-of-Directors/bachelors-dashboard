"use client";

import { createComment } from "@/api/request/comment";
import { Button, Input, useSnackbar } from "@/components/common";
import { useApplicantPageContext } from "@/contexts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { HeaderBlock } from "../HeaderBlock/HeaderBlock";

export const NewCommentBlock = () => {
  const [comment, setComment] = useState<string>("");
  const { insurance } = useApplicantPageContext();
  const queryClient = useQueryClient();

  const errorSnackbar = useSnackbar({
    description: "Обновите страницу и попробуйте снова",
    header: "Упс! Произошла ошибка",
    variant: "danger",
  });

  const { mutate } = useMutation({
    mutationKey: ["add", "comment", insurance],
    onSuccess: () => handleSuccess(),
    onError: () => errorSnackbar(),
    mutationFn: () =>
      createComment({
        email: "a.tretyakov@gmail.com",
        studentInsurance: insurance,
        content: comment,
      }),
  });

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["get", "comments", insurance] });
    setComment("");
  };

  const handleAddComment = (event: ChangeEvent<HTMLInputElement>) => setComment(event.target.value);

  return (
    <HeaderBlock>
      <Input
        placeholder="Введите комментарий"
        onChange={handleAddComment}
        label="Комментарий"
        value={comment}
      />
      <Button className="w-fit" size="md" onClick={() => mutate()}>
        Добавить комментарий
      </Button>
    </HeaderBlock>
  );
};
