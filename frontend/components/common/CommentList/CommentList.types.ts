import { Comment } from "@/api/request/comment/types";
import { BoxProps } from "@chakra-ui/react";

export interface CommnetListProps extends BoxProps {
  onAddComment?: () => void;
  isInteractive?: boolean;
  comments: Comment[];
  isExpanded: boolean;
}
