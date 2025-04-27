import { Comment } from "@/types/comment";
import { BoxProps } from "@chakra-ui/react";

export interface CommnetListProps extends BoxProps {
  comments: Comment[];
  onAddComment: () => void;
  isExpanded: boolean;
}
