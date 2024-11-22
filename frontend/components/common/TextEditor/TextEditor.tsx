"use client";

import { useDescriptionBlockContext } from "@/app/(dashboard)/tasks/components/NewTaskDrawer/DescriptionBlock/DecsriptionBlock.context";
import { TaskSchemaType } from "@/app/(dashboard)/tasks/components/NewTaskDrawer/TaskSchema";
import { HStack } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { Button } from "../Button/Button";
import { EditorControls } from "./EditorControls/EditorControls";
import { Container, Editor } from "./TextEditor.styles";
import { TextEditorProps } from "./TextEditor.types";

export const TextEditor = ({ toggleEditMode, ...props }: TextEditorProps) => {
  const { editor } = useDescriptionBlockContext();
  const { watch, setValue, getValues } = useFormContext<TaskSchemaType>();

  watch();

  const onCancel = () => {
    editor.commands.setContent(getValues("description") ?? "");
    toggleEditMode();
  };

  const onSaveChanges = () => {
    setValue("description", editor.getHTML());
    toggleEditMode();
  };

  if (!editor) {
    return null;
  }

  return (
    <Container>
      <EditorControls editor={editor} />
      <Editor editor={editor} />
      <HStack gap="12px">
        <Button color="secondary" onClick={onCancel}>
          Отменить
        </Button>
        <Button onClick={onSaveChanges}>Сохранить</Button>
      </HStack>
    </Container>
  );
};
