"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FlagProvider from "@unleash/proxy-client-react";
import { PrimeReactProvider } from "primereact/api";
import { PropsWithChildren } from "react";

const config = {
  url: "http://89.169.162.192:4242/api/frontend",
  clientKey: "default:development.unleash-insecure-frontend-api-token",
  refreshInterval: 5,
  appName: "fit-bachelor-dashboard",
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers = ({ children }: PropsWithChildren) => (
  <FlagProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <ChakraProvider theme={theme}>
          <PrimeReactProvider>
            <NextUIProvider>{children}</NextUIProvider>
          </PrimeReactProvider>
        </ChakraProvider>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  </FlagProvider>
);
