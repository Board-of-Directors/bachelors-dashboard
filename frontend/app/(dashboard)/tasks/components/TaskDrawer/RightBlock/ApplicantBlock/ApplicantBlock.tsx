import { Text, TextButton } from "@/components/common";
import { useDisclosure } from "@nextui-org/react";
import { useMemo } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { TaskSchemaType } from "../../TaskSchema";
import { Container, Row } from "../RightBlock.styles";
import { ApplicantList } from "./ApplicantList/ApplicantList";
import { ApplicantEntity } from "./ApplicantList/ApplicantList.types";
import { NewApplicantModal } from "./NewApplicantModal/NewApplicantModal";

export const ApplicantBlock = () => {
  const { onOpenChange, isOpen, onOpen } = useDisclosure();
  const { setValue, getValues, watch } = useFormContext<TaskSchemaType>();

  watch();

  const applicants = useMemo<ApplicantEntity[]>(() => {
    const items = getValues("applicants") ?? [];

    return items.map((item) => ({ name: item.label, snils: item.value }));
  }, [getValues("applicants")]);

  const handleRemoveApplicant = (index: number) => {
    const applicants = getValues("applicants");

    setValue(
      "applicants",
      applicants.filter((_, curIndex) => curIndex !== index),
    );
  };

  const handleAddApplicants = ({ items }: FieldValues) => {
    setValue("applicants", items);
  };

  return (
    <>
      <NewApplicantModal
        onAddApplicants={handleAddApplicants}
        onOpenChange={onOpenChange}
        isOpen={isOpen}
      />
      <Container>
        <Row>
          <Text className="text-[20px] font-medium">Абитуриенты</Text>
          <TextButton onClick={onOpen}>Добавить</TextButton>
        </Row>
        <ApplicantList applicants={applicants} onDeleteApplicant={handleRemoveApplicant} />
      </Container>
    </>
  );
};
