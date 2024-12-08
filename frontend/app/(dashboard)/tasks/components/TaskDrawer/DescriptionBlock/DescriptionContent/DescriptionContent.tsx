import { Text } from "@/components/common";
import { useDescriptionBlockContext } from "../DecsriptionBlock.context";
import { Decsription } from "./DescriptionContent.styles";

export const DescriptionContent = () => {
  const { editor } = useDescriptionBlockContext();

  if (!editor?.isEmpty) {
    return <Decsription editor={editor} contentEditable="false" />;
  }

  return <Text className="text-text-gray">Описание отсутствует</Text>;
};
