import { useEditor } from "@tiptap/react";
import { config } from "./HeaderEditor.config";
import { Editor } from "./HeaderEditor.styles";

export const HeaderEditor = () => {
  const editor = useEditor(config);

  if (!editor) {
    return null;
  }

  return <Editor editor={editor} />;
};
