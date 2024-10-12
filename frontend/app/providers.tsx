"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import { PrimeReactProvider } from 'primereact/api';
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => (
  <StyledComponentsRegistry>
    <ChakraProvider theme={theme}>
      <PrimeReactProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </PrimeReactProvider>
    </ChakraProvider>
  </StyledComponentsRegistry>
);
