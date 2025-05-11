import { TabelGroupModalType, TableGroupModalSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

export const useEditTableModal = (name: string) => {
    const form = useForm<TabelGroupModalType>({
        resolver: zodResolver(TableGroupModalSchema),
        defaultValues: { name: name },
    });

    const onSubmit = (fieldValues: FieldValues) => {
        alert(fieldValues);
    };

    return {
        form, onSubmit
    }
}