import { CommentList, Text } from "@/components/common";
import { ApplicantEntity } from "@/types/applicant";
import { HeaderBlock } from "../HeaderBlock/HeaderBlock";

export const CommentBlock = ({ comments }: Pick<ApplicantEntity, "comments">) => (
  <HeaderBlock
    rightContent={<Text className="text-text-gray">{`${comments?.length} шт.`}</Text>}
    header="Комментарии"
  >
    <CommentList
      borderBottomWidth={0}
      comments={comments}
      position="static"
      padding={0}
      isExpanded
    />
  </HeaderBlock>
);
