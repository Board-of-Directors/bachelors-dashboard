import { CalendarIcon, XIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { ControlledCalendar } from "../Calendar/ControlledCalendar";
import { Text } from "../Text/Text";
import { iconClassName, Row } from "./ControlledDatePicker.styles";
import { ControlledDatePickerProps } from "./ControlledDatePicker.types";

export const ControlledDatePicker = ({
  onDeleteDate,
  name,
  ...props
}: ControlledDatePickerProps) => {
  const { getValues } = useFormContext();

  return (
    <Row>
      <ControlledCalendar name={name} {...props}>
        <CalendarIcon className={iconClassName} />
      </ControlledCalendar>
      <Text className="text-text-gray">{getValues(name) ?? "Не указана"}</Text>
      {getValues(name) ? <XIcon className={iconClassName} onClick={onDeleteDate} /> : null}
    </Row>
  );
};
