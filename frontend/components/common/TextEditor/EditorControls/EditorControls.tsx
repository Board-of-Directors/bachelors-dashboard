import {
  BoldIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";
import { ControlGroup } from "./ControlGroup/ControlGroup";
import { ControlItem } from "./ControlGroup/ControlGroup.types";
import { Container } from "./EditorControls.styles";
import { EditorControlsProps } from "./EditorControls.types";

export const EditorControls = ({ editor }: EditorControlsProps) => {
  const headings: ControlItem[] = [
    {
      icon: <Heading1Icon />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive("heading", { level: 1 }),
      id: "heading1",
    },
    {
      icon: <Heading2Icon />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive("heading", { level: 2 }),
      id: "heading2",
    },
    {
      icon: <Heading3Icon />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: editor.isActive("heading", { level: 3 }),
      id: "heading3",
    },
  ];

  const styles: ControlItem[] = [
    {
      icon: <BoldIcon />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
      id: "bold",
    },
    {
      icon: <ItalicIcon />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
      id: "italic",
    },
    {
      icon: <UnderlineIcon />,
      onClick: () => {},
      isActive: editor.isActive("underline"),
      id: "underline",
    },
  ];

  return (
    <Container>
      <ControlGroup items={headings} />
      <ControlGroup items={styles} />
    </Container>
  );
};
