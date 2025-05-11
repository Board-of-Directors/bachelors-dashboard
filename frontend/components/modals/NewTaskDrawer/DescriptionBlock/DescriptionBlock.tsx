import { Text, TextButton } from "@/components/common";
import { TextEditor } from "@/components/common/TextEditor/TextEditor";
import { useEditor } from "@tiptap/react";
import { useFormContext } from "react-hook-form";
import { useToggle } from "usehooks-ts";
import { Block } from "../NewTaskDrawer.styles";
import { TaskSchemaType } from "../TaskSchema";
import { DescriptionBlockProvider } from "./DecsriptionBlock.context";
import { createConfig } from "./DescriptionBlock.config";
import { Header } from "./DescriptionBlock.styles";
import { DescriptionContent } from "./DescriptionContent/DescriptionContent";

export const DescriptionBlock = () => {
  const [isEditMode, toggleEditMode] = useToggle(false);
  const { getValues } = useFormContext<TaskSchemaType>();
  const editor = useEditor(createConfig(getValues("description")));

  return (
    <DescriptionBlockProvider editor={editor}>
      <Block gridColumn="span 5 / span 5" gap="28px">
        <Header>
          <Text className="text-[20px] font-medium text-text-back">Описание задачи</Text>
          {isEditMode ? null : (
            <TextButton fontSize="14px" onClick={toggleEditMode}>
              Редактировать
            </TextButton>
          )}
        </Header>
        {isEditMode ? <TextEditor toggleEditMode={toggleEditMode} /> : <DescriptionContent />}
      </Block>
    </DescriptionBlockProvider>
  );
};
