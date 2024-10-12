import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-montserrat",
});

export const fonts = {
  montserrat,
};
