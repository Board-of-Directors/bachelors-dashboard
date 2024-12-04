import { chakra } from "@chakra-ui/react";
import { EditorContent } from "@tiptap/react";

const fontStyles = {
    "& > div > h1": {
        fontSize: "2em",
    },

    "& > div > h2": {
        fontSize: "1.5em",
    },

    "& > div > h3": {
        fontSize: "1.17em",
    },
};

const listStyles = {
    "& > div > ul, ol": {
        padding: "0 1rem",
        margin: "1.25rem 1rem 1.25rem 0.4rem",
    },
    "& > div > li": {
        marginTop: "0.25em",
        marginBottom: "0.25em",
        marginLeft: "20px",
    },
};

export const Editor = chakra(EditorContent, {
    baseStyle: {
        ...fontStyles,
        ...listStyles,

        ".ProseMirror:focus": {
            outline: "none",
        },
    },
});