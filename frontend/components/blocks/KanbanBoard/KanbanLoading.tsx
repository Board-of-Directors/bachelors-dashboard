import { Skeleton, VStack } from "@chakra-ui/react";
import { Container } from "./KanbanBoard.styles";
import { Container as KanbanBodyContainer } from "./KanbanBody/KanbanBody.styles";

const KanbanBodyLoading = () => (
  <KanbanBodyContainer px="0">
    {[1, 2, 3, 4].map((_, index) => (
      <VStack gap="20px" key={index}>
        {[1, 2, 3].map((_, index) => (
          <Skeleton w="full" h="300px" key={index} />
        ))}
      </VStack>
    ))}
  </KanbanBodyContainer>
);

export const KanbanLoading = () => (
  <Container px="40px">
    <Skeleton w="full" h="60px" />
    <KanbanBodyLoading />
  </Container>
);
