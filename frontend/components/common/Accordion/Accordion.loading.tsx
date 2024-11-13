import { VStack } from "@chakra-ui/react";
import { Skeleton } from "../Skeleton/Skeleton";

export const AccordionLoading = () => (
    <VStack gap="16px" width="100%" px='40px'>
        {[1, 2, 3].map((key) => <Skeleton key={key} />)}
    </VStack>
)