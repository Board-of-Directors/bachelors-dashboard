import { ControlledWrapper } from "@/types/utils";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "./Input";
import { InputProps } from "./Input.types";

export const ControlledInput = ({ name, ...props }: ControlledWrapper<InputProps>) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Input
                    errorMessage={error?.message}
                    isInvalid={Boolean(error)}
                    onChange={onChange}
                    value={value}
                    {...props}
                />
            )}
        />
    )
}