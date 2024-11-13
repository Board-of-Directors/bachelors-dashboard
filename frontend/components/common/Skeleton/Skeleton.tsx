import { Skeleton as ChakraSkeleton, SkeletonProps } from "@chakra-ui/react";

export const Skeleton = (props: SkeletonProps) => (
    <ChakraSkeleton startColor="#C7C4C450" endColor="background.neutral" width='100%' height='100px' rounded="xl" {...props} />
)