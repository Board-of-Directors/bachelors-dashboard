import { ControlledWrapper } from "@/types/utils";
import { AutocompleteProps } from "./Autocomplete.types";
import { Controller, useFormContext } from "react-hook-form";
import { Autocomplete } from "./Autocomplete";

interface ControlledAutocompleteProps extends ControlledWrapper<AutocompleteProps> {}

export const ControlledAutocomplete = ({name, ...props} : ControlledAutocompleteProps) => {
    const {control} = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field : {value, onChange}, fieldState : {error} }) => (
                <Autocomplete
                    errorMessage={error?.message}
                    onSelectionChange={onChange}
                    isInvalid={Boolean(error)}
                    selectedKey={value}
                    {...props}
                />
            )}
        />
    )
} 