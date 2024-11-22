import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";
import { Calendar } from "./Calendar";
import { ControlledCalendarProps } from "./Calendar.types";
import { getFormattedDate } from "./Calendar.utils";

export const ControlledCalendar = ({
  name,
  minValueFieldName,
  ...props
}: ControlledCalendarProps) => {
  const { control, getValues } = useFormContext();

  const minValue = minValueFieldName
    ? getValues(minValueFieldName)
    : dayjs(Date.now()).format("DD.MM.YYYY");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Calendar
          onChange={(value: any) => onChange(dayjs(value).format("DD.MM.YYYY"))}
          value={getFormattedDate(value ?? minValue)}
          minValue={getFormattedDate(minValue)}
          {...props}
        />
      )}
    />
  );
};
