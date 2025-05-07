
import dayjs from "dayjs";
import { z } from "zod";

const REQUIRED_FIELD_ERROR = "Данное поле является обязательным для заполнения";

export const RequiredFieldSchema = z.string().min(1, REQUIRED_FIELD_ERROR);
export const OptionalFieldSchema = z.string().optional();

export const TaskSchema = z.object({
    description : OptionalFieldSchema,
    title : RequiredFieldSchema,
    startDate : z.date(),
    endDate : z.date(),
}).refine(({startDate, endDate}) => {
    return dayjs(endDate).isBefore(dayjs(startDate))
})