import { Skeleton } from "../../Skeleton/Skeleton";
import { FileRow } from "./FileRow.styles";

export const Loading = () => (
  <>
    {[1, 2, 3].map((key) => (
      <FileRow w="full" display="inline-flex" alignItems="start" gap="1.5rem" key={key}>
        <Skeleton rounded="md" w="38px" h="38px" />
        <Skeleton rounded="md" h="38px" w="full" />
      </FileRow>
    ))}
  </>
);
