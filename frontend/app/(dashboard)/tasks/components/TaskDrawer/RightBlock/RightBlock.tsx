import { ApplicantBlock } from "./ApplicantBlock/ApplicantBlock";
import { AssigneesBlock } from "./AssigneesBlock/AssigneesBlock";
import { InfoBlock } from "./InfoBlock/InfoBlock";
import { MainContainer } from "./RightBlock.styles";
import { TagsBlock } from "./TagsBlock/TagsBlock";

export const RightBlock = () => (
  <MainContainer>
    <InfoBlock />
    <TagsBlock />
    <AssigneesBlock />
    <ApplicantBlock />
  </MainContainer>
);
