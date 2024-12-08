import { Text, TextButton } from "@/components/common";
import { useDisclosure } from "@nextui-org/react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { TaskSchemaType } from "../../TaskSchema";
import { Container, Row } from "../RightBlock.styles";
import { NewTagModal } from "./NewTagModal/NewTagModal";

export const TagsBlock = () => {
  const { onOpenChange, isOpen, onOpen } = useDisclosure();
  const { control } = useFormContext<TaskSchemaType>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  return (
    <>
      <NewTagModal onAddTag={append} isOpen={isOpen} onOpenChange={onOpenChange} />
      <Container>
        <Row>
          <Text className="text-[20px] font-medium">Теги</Text>
          <TextButton onClick={onOpen}>Добавить</TextButton>
        </Row>
        <Row justifyContent="start" alignItems={"center"} gap="12px">
          {fields?.map(({ id }, index) => <></>)}
        </Row>
      </Container>
    </>
  );
};
