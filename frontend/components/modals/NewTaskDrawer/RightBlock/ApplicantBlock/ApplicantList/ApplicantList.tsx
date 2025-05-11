import { Text } from "@/components/common";
import { HStack } from "@chakra-ui/react";
import { XIcon } from "lucide-react";
import { iconClassName } from "../../RightBlock.styles";
import { ApplicantRow, Circle, Container } from "./ApplicantList.styles";
import { ApplicantListProps } from "./ApplicantList.types";

export const ApplicantList = ({ onDeleteApplicant, applicants }: ApplicantListProps) => (
  <Container>
    {applicants.map(({ name, snils }, index) => (
      <ApplicantRow>
        <Container gap="8px">
          <Text className="text-text-back">{name}</Text>
          <HStack alignItems="center" gap="6px">
            <Text className="text-sm text-text-gray">СНИЛС</Text>
            <Circle />
            <Text className="text-sm text-text-gray">{snils}</Text>
          </HStack>
        </Container>
        <XIcon className={iconClassName} onClick={() => onDeleteApplicant(index)} />
      </ApplicantRow>
    ))}
  </Container>
);
