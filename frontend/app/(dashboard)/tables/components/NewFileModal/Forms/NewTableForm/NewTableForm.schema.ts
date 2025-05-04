import { FileFieldSchema, OptionalFieldSchema } from "@/utils/schemas";
import { z } from "zod";

const NewTableSchema = z.object({
  groupId: OptionalFieldSchema,
  table: FileFieldSchema,
});

type NewTableType = z.infer<typeof NewTableSchema>;

export { NewTableSchema, type NewTableType };
