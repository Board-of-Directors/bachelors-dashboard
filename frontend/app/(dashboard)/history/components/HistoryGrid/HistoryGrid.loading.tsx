import { Skeleton } from "@/components/common";
import { SimpleGrid } from "@chakra-ui/react";

export const Loading = () => (
  <SimpleGrid padding="28px 40px" width="100%" columns={2} gap="20px">
    {[1, 2, 3, 4, 5, 6].map((index) => (
      <Skeleton height="130px" key={index} />
    ))}
  </SimpleGrid>
);
