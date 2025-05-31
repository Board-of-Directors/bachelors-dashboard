import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";
import "./global.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Приёмная комиссия ФИТ НГУ",
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic"],
});

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" className={montserrat.variable}>
    <body>
      <Providers>{children}</Providers>
      <Toaster />
    </body>
  </html>
);

export default RootLayout;
