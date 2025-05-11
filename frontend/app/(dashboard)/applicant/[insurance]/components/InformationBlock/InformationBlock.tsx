import { ArrowBackButton, Header } from "@/components/common";
import { CommentBlock } from "../CommentBlock/CommentBlock";
import { GridBlock } from "../GridBlock/GridBlock";
import { NewCommentBlock } from "../NewCommentBlock/NewCommentBlock";
import { Container } from "./InformationBlock.styles";
import { InformationBlockProps } from "./InformationBlock.types";

export const InformationBlock = <T,>({ applicant }: InformationBlockProps<T>) => (
  <Container>
    <Header
      className={"pl-10 pr-5 pb-7 border-b-1 border-button-secondary"}
      leftContent={<ArrowBackButton />}
      header={applicant.header}
    />
    {/* <ScoreBlock scores={applicant.scores} /> */}
    <GridBlock applicant={applicant} />
    {applicant.comments.length > 0 ? <CommentBlock comments={applicant.comments} /> : null}
    <NewCommentBlock />
  </Container>
);
