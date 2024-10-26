import { FileFieldSchema, RequiredFieldSchema } from "@/utils/schemas";
import { z } from "zod";

const FileModalSchema = z.object({
    name : RequiredFieldSchema,
    file : FileFieldSchema
});

type FileModalType = z.infer<typeof FileFieldSchema>;

export { FileModalSchema, type FileModalType };