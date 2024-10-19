import { Button, ControlledFileInput, ControlledInput, Modal, ModalProps, Text } from "@/components/common";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FileModalSchema, FileModalType } from "./FileModalSchema";

export const NewFileModal = (props: ModalProps) => {
    const form = useForm<FileModalType>({
        resolver: zodResolver(FileModalSchema)
    })

    const handleSubmit = (fieldValues: FieldValues) => {
        alert(fieldValues);
    }

    return (
        <FormProvider {...form}>
            <Modal
                {...props}
                header={<Text className='font-semibold text-2xl'>Новый документ</Text>}
                body={
                    <>
                        <ControlledInput name={"name"} label='Название' placeholder="Введите название" />
                        <ControlledFileInput name={"file"} label='Документ' placeholder="Выберите документ" />
                    </>
                }
                footer={<Button size='xl' onClick={handleSubmit}>Добавить</Button>}
            />
        </FormProvider>
    )
}