"use client"

import { Button } from "@/components/common";
import { Input } from "@/components/common/Input/Input";
import { ChangeEventHandler, useState } from "react";

const EMPTY_STRING_STATE = '';

const KnowledgePage = () => {
    const [value, setValue] = useState<string>(EMPTY_STRING_STATE);

    const handleChange : ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value);
    }

    // Обработка события клика на кнопку происходит здесь
    const handleClick = () => {

    }

    return (
        <main className="p-10 flex flex-col gap-5">
        <Input className="w-[600px]" placeholder="Введите значение" onChange={handleChange} value={value}/>
        <Button className="w-[300px]" onClick={handleClick}>Отправить</Button>
        </main>
    )
}

export default KnowledgePage;