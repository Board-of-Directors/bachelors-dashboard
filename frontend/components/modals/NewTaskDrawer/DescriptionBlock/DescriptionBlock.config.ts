import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Italic from "@tiptap/extension-italic";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import StarterKit from "@tiptap/starter-kit";

export const createConfig = (description: string | undefined) => ({
    extensions: [
        StarterKit,
        BulletList.configure({
            HTMLAttributes: {
                class: "list-disc",
            },
        }),
        OrderedList.configure({
            HTMLAttributes: {
                class: "list-decimal",
            },
        }),
        Bold,
        Italic,
        Document,
        Paragraph,
        ListItem,
        Text,
        Heading.configure({
            levels: [1, 2, 3, 4],
        }),
    ],
    content: description ?? "",
});
