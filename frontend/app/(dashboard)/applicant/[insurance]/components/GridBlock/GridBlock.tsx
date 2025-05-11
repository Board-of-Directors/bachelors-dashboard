import { HeaderDescription } from "@/types/applicant";
import { useMemo } from "react";
import { GridItem } from "../GridItem/GridItem";
import { InformationBlockProps } from "../InformationBlock/InformationBlock.types";
import { Row } from "./GridBlock.styles";
import { createGridRows } from "./GridBlock.utils";

export const GridBlock = <T,>({ applicant }: InformationBlockProps<T>) => {
  const rows = useMemo<HeaderDescription[][]>(() => createGridRows(applicant), [applicant]);

  return rows.map((row, rowIndex) => (
    <Row key={rowIndex}>
      {row.map((item, itemIndex) => (
        <GridItem background="none" padding="0" {...item} key={itemIndex} />
      ))}
    </Row>
  ));
};
