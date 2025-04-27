import { chakra } from "@chakra-ui/react";
import { Grid } from "../ScoreBlock/ScoreBlock.styles";

export const Row = chakra(Grid, {
    baseStyle: {
        borderBottomColor: "button.secondary",
        padding: "28px 20px 28px 40px",
        borderBottomWidth: '1px',
    }
})