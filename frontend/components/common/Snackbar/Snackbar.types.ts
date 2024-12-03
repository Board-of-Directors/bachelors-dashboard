import { AlertProps } from "../Alert/Alert.types";

export interface SnackbarProps extends Omit<AlertProps, "onClose"> {
  closable?: boolean;
}
