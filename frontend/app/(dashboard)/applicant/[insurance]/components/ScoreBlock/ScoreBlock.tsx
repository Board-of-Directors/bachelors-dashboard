import { ApplicantDetails } from "@/types/applicant";
import { GridItem } from "../GridItem/GridItem";
import { HeaderBlock } from "../HeaderBlock/HeaderBlock";
import { Grid } from "./ScoreBlock.styles";

export const ScoreBlock = ({ scores }: Pick<ApplicantDetails, "scores">) => (
  <HeaderBlock header="Баллы ЕГЭ">
    <Grid>
      {scores.map((item, index) => (
        <GridItem {...item} key={index} />
      ))}
    </Grid>
  </HeaderBlock>
);
