import { ControlledWrapper } from "@/types/utils";
import { ChipProps } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import { Tag } from "./Tag";

export const ControlledTag = ({ name, ...props }: ControlledWrapper<ChipProps>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: {
          value: { label, value },
        },
      }) => (
        <Tag {...value} {...props}>
          {label}
        </Tag>
      )}
    />
  );
};
