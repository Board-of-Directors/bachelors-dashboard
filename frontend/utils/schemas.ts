import { z } from "zod";

const MAX_FILE_SIZE = 500000;

const REQUIRED_FIELD_ERROR = "Данное поле является обязательным для заполнения";
const MAX_FILE_SIZE_ERROR = "Максимальный размер файла - 5Mb.";

export const RequiredFieldSchema = z.string().min(1, REQUIRED_FIELD_ERROR);

export const OptionalFieldSchema = z.string().optional();

export const FileFieldSchema = z
  .any()
  .refine((files) => files?.length == 1, REQUIRED_FIELD_ERROR)
  .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, MAX_FILE_SIZE_ERROR);

export const SelectSchema = z.object({
  label: RequiredFieldSchema,
  value: z.any(),
});
