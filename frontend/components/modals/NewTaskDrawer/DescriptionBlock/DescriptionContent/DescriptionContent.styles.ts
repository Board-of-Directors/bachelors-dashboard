import { Editor } from "@/components/common/TextEditor/TextEditor.styles";
import { chakra } from "@chakra-ui/react";

export const Decsription = chakra(Editor, {
    baseStyle: {
        padding: "0px",
        borderRadius: "0px",
        borderWidth: "0px",
        borderColor: "none",
        minHeight: "none",
    }
});