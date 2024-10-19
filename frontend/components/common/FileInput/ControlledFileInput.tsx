import { ControlledWrapper } from "@/types/utils";
import { Controller, useFormContext } from "react-hook-form";
import { InputProps } from "../Input/Input.types";
import { FileInput } from "./FileInput";

export const ControlledFileInput = ({ name, ...props }: ControlledWrapper<InputProps>) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <FileInput
                    {...props}
                    onDelete={() => onChange(undefined)}
                    errorMessage={error?.message}
                    isInvalid={Boolean(error)}
                    onChange={onChange}
                    file={value}
                />
            )}
        />
    )
}