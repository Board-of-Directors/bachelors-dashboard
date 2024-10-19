import { Accordion, extendVariants } from "@nextui-org/react";

export const StyledAccordion = extendVariants(Accordion, {
  variants: {
    variant: {
      bordered: "border-[2px] border-button-secondary",
    },
  },
});
