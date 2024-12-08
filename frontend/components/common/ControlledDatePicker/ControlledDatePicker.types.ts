import { ControlledCalendarProps } from "../Calendar/Calendar.types";

export interface ControlledDatePickerProps extends ControlledCalendarProps {
    date?: string;
    onDeleteDate: () => void;
}