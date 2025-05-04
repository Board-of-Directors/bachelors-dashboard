import { FileFieldSchema, OptionalFieldSchema, RequiredFieldSchema } from "@/utils/schemas";
import { z } from "zod";

export const NewFileSchema = z.object({
  groupId: OptionalFieldSchema,
  name: RequiredFieldSchema,
  file: FileFieldSchema,
});

export type NewFileType = z.infer<typeof NewFileSchema>;
