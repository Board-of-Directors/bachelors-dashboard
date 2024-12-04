import { Button, Text, TextButton } from "@/components/common";
import { TextEditor } from "@/components/common/TextEditor/TextEditor";
import { Block } from "../NewTaskDrawer.styles";
import { DescriptionBlockProvider } from "./DecsriptionBlock.context";
import { useDescriptionBlock } from "./DescriptionBlock.hooks";
import { Header } from "./DescriptionBlock.styles";
import { DescriptionContent } from "./DescriptionContent/DescriptionContent";

interface DescriptionBlockProps {
  onClose : () => void
}

export const DescriptionBlock = ({onClose} : DescriptionBlockProps) => {
  const { states, actions } = useDescriptionBlock(onClose);
  const { editor, isEditMode, isSubmitting } = states;
  const { toggleEditMode, handleSubmit } = actions;

  return (
    <>
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
          <Button onClick={handleSubmit} isSubmitting={isSubmitting} className="w-[200px]">
            Отправить
          </Button>
        </Block>
      </DescriptionBlockProvider>
    </>
  );
};
