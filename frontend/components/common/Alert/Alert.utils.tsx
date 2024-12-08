import { AlertCircle, CheckIcon, XCircle } from "lucide-react";
import { ReactNode } from "react";
import { Variant } from "./Alert.types";

export const AlertColorScheme: Record<Variant, [string, string]> = {
  success: ["background.success", "icon.green"],
  warning: ["background.danger", "button.primary"],
  danger: ["background.warning", "indicator.warning"],
};

export const AlertIconScheme: Record<Variant, ReactNode> = {
  danger: <XCircle />,
  warning: <AlertCircle />,
  success: <CheckIcon />,
};
