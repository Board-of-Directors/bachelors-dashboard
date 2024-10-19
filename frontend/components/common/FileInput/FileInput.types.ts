import { InputProps } from "../Input/Input.types";

export interface FileInputProps extends Omit<InputProps, 'onChange'> {
    onChange: (file: File) => void;
    onDelete: () => void;
    file?: File;
}