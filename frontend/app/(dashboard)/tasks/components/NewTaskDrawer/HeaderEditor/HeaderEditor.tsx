"use client";

import { useEditor } from "@tiptap/react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { config } from "./HeaderEditor.config";
import { Editor } from "./HeaderEditor.styles";

export const HeaderEditor = () => {
  const editor = useEditor(config);
  const { watch, setValue } = useFormContext();

  watch();

  useEffect(() => {
    if (editor) {
      setValue("header", editor.getHTML());
    }
  }, [editor?.getHTML()]);

  return editor ? <Editor editor={editor} /> : null;
};
