import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { fonts } from "./fonts";
import "./global.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Приёмная комиссия ФИТ НГУ",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" className={fonts.montserrat.variable}>
    <body>
      <Providers>{children}</Providers>
      <Toaster />
    </body>
  </html>
);

export default RootLayout;
