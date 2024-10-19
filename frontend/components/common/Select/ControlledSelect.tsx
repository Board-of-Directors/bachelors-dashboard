import { ControlledWrapper } from "@/types/utils";
import { Controller, useFormContext } from "react-hook-form";
import { Select } from "./Select";
import { SelectProps } from "./Select.types";

export const ControlledSelect = ({
  name,
  ...props
}: ControlledWrapper<Omit<SelectProps, "selectedItems" | "onChange">>) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <Select
          {...props}
          errorMessage={error?.message}
          selectedItems={value ?? []}
          isInvalid={Boolean(error)}
          onChange={onChange}
        />
      )}
    />
  );
};
