import { ControlledDatePicker, Text } from "@/components/common";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { TaskSchemaType } from "../../TaskSchema";
import { Container } from "../RightBlock.styles";
import { Container as InnerContainer } from "./InfoBlock.styles";

export const InfoBlock = () => {
  const { getValues, setValue, watch } = useFormContext<TaskSchemaType>();

  watch();

  const removeStartDate = () => setValue("startDate", undefined);
  const removeEndDate = () => setValue("endDate", undefined);

  const rows = [
    {
      header: "Статус",
      description: <Text>Не начато</Text>,
    },
    {
      header: "Начало",
      description: <ControlledDatePicker name="startDate" onDeleteDate={removeStartDate} />,
    },
    {
      header: "Конец",
      description: (
        <ControlledDatePicker
          minValueFieldName="startDate"
          onDeleteDate={removeEndDate}
          name="endDate"
        />
      ),
    },
  ];

  useEffect(() => {
    const [startDate, endDate] = getValues(["startDate", "endDate"]);

    const [formatStart, formatEnd] = [
      dayjs(startDate, "DD.MM.YYYY", true),
      dayjs(endDate, "DD.MM.YYYY", true),
    ];

    if (formatStart && formatEnd && formatEnd.isBefore(formatStart)) {
      setValue("endDate", undefined);
    }
  }, [getValues(["startDate", "endDate"])]);

  return (
    <Container>
      <Text className="text-[20px] font-medium">Информация</Text>
      {rows.map(({ header, description }, index) => (
        <InnerContainer key={index}>
          <Text className="min-w-[150px] text-text-gray">{header}</Text>
          {description}
        </InnerContainer>
      ))}
    </Container>
  );
};
