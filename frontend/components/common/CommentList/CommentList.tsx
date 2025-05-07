import { PlusIcon } from "lucide-react";
import { Button } from "../Button/Button";
import { Container } from "./CommentList.styles";
import { CommnetListProps } from "./CommentList.types";
import { Comment } from "./Comment/Comment";
import { forwardRef } from "react";

export const CommentList = forwardRef<HTMLDivElement, CommnetListProps>(
  ({ comments, onAddComment, isExpanded, ...props }: CommnetListProps, ref) => (
    <Container ref={ref} isExpanded={isExpanded} {...props}>
      {comments.map((comment, key) => (
        <Comment {...comment} key={key} />
      ))}
      <Button
        className="w-fit text-indicator-info bg-background-info"
        onClick={onAddComment}
        color="secondary"
        size="sm"
      >
        <PlusIcon className="size-[18px] text-link-blue" />
        {"Добавить комментарий"}
      </Button>
    </Container>
  ),
);
