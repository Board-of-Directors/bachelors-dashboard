import { FileFieldSchema } from "@/utils/schemas";
import { z } from "zod";

const NewTableSchema = z.object({
  table: FileFieldSchema,
});

type NewTableType = z.infer<typeof NewTableSchema>;

export { NewTableSchema, type NewTableType };
