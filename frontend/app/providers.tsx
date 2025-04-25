"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";
import { PropsWithChildren } from "react";

const config = {
  url: `${process.env.NEXT_PUBLIC_UNLEASH_HOST}/api/frontend`,
  clientKey: "default:development.unleash-insecure-frontend-api-token",
  appName: "fit-bachelor-dashboard",
  refreshInterval: 5,
};

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
