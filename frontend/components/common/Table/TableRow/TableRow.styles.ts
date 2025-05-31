import { Box, chakra, Tr } from "@chakra-ui/react";

const InteractiveCell = chakra(Box, {
  baseStyle: {
    display: "inline-flex",
    gap: "12px",
  },
});

const CommentsRow = chakra(Box, {
  baseStyle: {
    position: "relative",
  },
});

const ApplicantRow = chakra(Box, {
  baseStyle: {
    display: "inline-flex",
    width: "100%",
    borderBottomWidth: "1px",
    borderBottomColor: "#F3F3F3",

    "& > *:first-child": {
      paddingLeft: "40px",
    },
  },
});

export { InteractiveCell, CommentsRow, ApplicantRow };
