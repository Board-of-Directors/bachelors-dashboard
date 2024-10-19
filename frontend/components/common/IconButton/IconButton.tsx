import React from "react";
import { Button } from "./IconButton.styles";
import { IconButtonProps } from "./IconButton.types";

export const IconButton = ({ children, hoverBackground, ...props }: IconButtonProps) => (
  <Button hoverBackground={hoverBackground} {...props}>
    {children}
  </Button>
);
