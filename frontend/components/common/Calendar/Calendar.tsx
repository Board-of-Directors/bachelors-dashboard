import { Calendar as NextCalendar, Tooltip } from "@nextui-org/react";
import { I18nProvider } from "@react-aria/i18n";
import { calendarClassNames, tooltipClassNames } from "./Calendar.styles";
import { CalendarProps } from "./Calendar.types";

export const Calendar = ({ children, ...props }: CalendarProps) => (
    <Tooltip
        classNames={tooltipClassNames}
        placement="bottom-start"
        content={
            <I18nProvider locale="ru-RU">
                <NextCalendar
                    classNames={calendarClassNames}
                    {...props}
                />
            </I18nProvider>
        }>
        {children}
    </Tooltip>
);