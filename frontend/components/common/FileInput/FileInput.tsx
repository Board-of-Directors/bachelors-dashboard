import { UploadIcon, XIcon } from "lucide-react";
import { useRef } from "react";
import { Input } from "../Input/Input";
import { FileInputProps } from "./FileInput.types";

const iconCN = "text-icon-gray group-hover:text-indicator-info size-[18px] cursor-pointer"

export const FileInput = ({ file, onChange, onDelete, ...props }: FileInputProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentFile = event.target.files?.[0];

        if (currentFile) {
            onChange(currentFile);
        }
    }

    const handleClear = () => {
        if (ref.current) {
            ref.current.value = ""
        }
    }

    const handleClick = () => {
        if (file === undefined) {
            ref.current?.click();
        } else {
            handleClear();
        }
    }

    return (
        <>
            <Input
                readOnly
                onClick={handleClick}
                value={file?.name}
                endContent={
                    file !== undefined
                        ? <XIcon onClick={onDelete} className={iconCN} />
                        : <UploadIcon className={iconCN} />
                }
                {...props}
            />
            <input ref={ref} className="hidden" type="file" onChange={handleChange} onClick={handleClear} />
        </>
    )
}