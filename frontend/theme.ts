import { extendTheme } from "@chakra-ui/react";

export const colors = {
  text: {
    back: "#181818",
    white: "#FFFFFF",
    gray: "#A6A6A6",
  },
  icon: {
    gray: "#C7C4C4",
    green: "#06BE87",
  },
  button: {
    secondary: "#F3F3F3",
    primary: "#ED942C",
  },
  indicator: {
    warning: "#EB6B2E",
    info: "#2C90ED",
  },
  background: {
    info: "#EAF4FD",
    warning: "#FDF0EA",
    danger: "#FDF4EA",
    success: "#D5FBF0",
    hover: "#F3F3F330",
    neutral: "#F9F9F9",
    "semi-transparent": "#18181850",
  },
};

export const theme = extendTheme({
  fonts: {
    body: "var(--font-montserrat)",
  },
  colors,
});
