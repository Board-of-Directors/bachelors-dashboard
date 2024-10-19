import { Input as NextInput } from "@nextui-org/react";
import { InputProps } from "./Input.types";

export const Input = (props: InputProps) => {

    return (
        <NextInput
            {...props}
            radius='sm'
            labelPlacement="outside"
            classNames={{
                label: "text-text-black pb-3",
                input: "text-text-gray text-base placeholder:text-text-gray hover:bg-transparent",
                innerWrapper: "bg-transparent rounded-[5px] hover:bg-transparent",
                inputWrapper: [
                    'bg-transparent border-button-secondary border-2 shadow-none',
                    'group-hover:bg-transparent group-hover:border-indicator-info',
                    'group-data-[focus=true]:bg-transparent px-5 py-4 h-fit'
                ],
            }}
        />
    )
}