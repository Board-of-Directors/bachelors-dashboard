import { FileFieldSchema, RequiredFieldSchema, SelectSchema } from "@/utils/schemas";
import { z } from "zod";

export const NewFileSchema = z.object({
  groupId: z.array(SelectSchema).optional(),
  name: RequiredFieldSchema,
  file: FileFieldSchema,
});

export type NewFileType = z.infer<typeof NewFileSchema>;
