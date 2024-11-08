"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from 'primereact/api';
import { PropsWithChildren } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    <StyledComponentsRegistry>
      <ChakraProvider theme={theme}>
        <PrimeReactProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </PrimeReactProvider>
      </ChakraProvider>
    </StyledComponentsRegistry>
  </QueryClientProvider>

);
