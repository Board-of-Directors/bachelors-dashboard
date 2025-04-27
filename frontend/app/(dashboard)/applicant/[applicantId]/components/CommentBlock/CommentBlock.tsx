import { CommentList, Text } from "@/components/common";
import { ApplicantDetails } from "@/types/applicant";
import { HeaderBlock } from "../HeaderBlock/HeaderBlock";

export const CommentBlock = ({ comments }: Pick<ApplicantDetails, "comments">) => {
  const handleAddComment = () => {};

  return (
    <HeaderBlock
      rightContent={<Text className="text-text-gray">{`${comments.length} шт.`}</Text>}
      header="Комментарии"
    >
      <CommentList
        onAddComment={handleAddComment}
        borderBottomWidth={0}
        comments={comments}
        position="static"
        padding={0}
        isExpanded
      />
    </HeaderBlock>
  );
};
