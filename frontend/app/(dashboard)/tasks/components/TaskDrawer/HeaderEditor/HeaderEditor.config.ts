import Heading from "@tiptap/extension-heading";
import StarterKit from "@tiptap/starter-kit";

export const config = {
    extensions: [
        StarterKit,
        Heading.configure({
            levels: [1, 2, 3, 4],
        }),
    ],
    content: "<h2><b>Новая задача</b></h2>",
};