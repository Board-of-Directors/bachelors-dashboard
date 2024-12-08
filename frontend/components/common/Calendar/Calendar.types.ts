import { ControlledWrapper } from "@/types/utils";
import { CalendarProps as NextCalendarProps } from "@nextui-org/react";
import { PropsWithChildren } from "react";

interface CalendarProps extends NextCalendarProps, PropsWithChildren { }

interface ControlledCalendarProps extends ControlledWrapper<CalendarProps> {
    minValueFieldName?: string;
}

export type { CalendarProps, ControlledCalendarProps };

