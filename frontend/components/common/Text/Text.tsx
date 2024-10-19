import { TextProps } from "./Text.types";
import { createTextByProps } from "./Text.utils";

export const Text = (props: TextProps) => {
  return createTextByProps(props);
};
