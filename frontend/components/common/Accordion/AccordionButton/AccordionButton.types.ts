import { AccordionItemProps } from "../AccordionItem/AccordionItem.types";

export interface AccordionButtonProps extends Omit<AccordionItemProps, 'folder'> {
    name: string;
}