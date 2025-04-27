import { ArrowBackButton, Header } from "@/components/common";
import { useMemo } from "react";
import { CommentBlock } from "../CommentBlock/CommentBlock";
import { GridBlock } from "../GridBlock/GridBlock";
import { ScoreBlock } from "../ScoreBlock/ScoreBlock";
import { Container } from "./InformationBlock.styles";
import { InformationBlockProps } from "./InformationBlock.types";

export const InformationBlock = ({ applicant }: InformationBlockProps) => {
  const name = useMemo(() => applicant, [applicant]);

  return (
    <Container>
      <Header
        className={"pl-10 pr-5 pb-7 border-b-1 border-button-secondary"}
        header={"Константинов Никита Игоревич"}
        leftContent={<ArrowBackButton />}
      />
      {/* <ScoreBlock scores={applicant.scores} />
      <GridBlock applicant={applicant} />
      <CommentBlock comments={applicant.comments} /> */}
    </Container>
  );
};
