"use client"

import { ToastId, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import { Alert } from "../Alert/Alert";
import { SnackbarProps } from "./Snackbar.types";

const TOAST_DURATION = 3000;

export const useSnackbar = ({ closable, ...props }: SnackbarProps) => {
  const toast = useToast();
  const activeToastRef = useRef<ToastId>();

  const close = () => {
    toast.close(activeToastRef.current);
  };

  const show = () => {
    if (!toast.isActive(activeToastRef.current)) {
      activeToastRef.current = toast({
        render: () => <Alert onClose={closable ? close : null} {...props} />,
        duration: TOAST_DURATION,
        position: "bottom-right",
      });
    }
  };

  return show;
};
