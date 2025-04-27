import { OptionalFieldSchema, SelectSchema } from "@/utils/schemas";
import { z } from "zod";

const TaskSchema = z.object({
  header: OptionalFieldSchema,
  description: OptionalFieldSchema,
  startDate: OptionalFieldSchema,
  endDate: OptionalFieldSchema,
  tags: z.array(SelectSchema),
  assignees: z.array(SelectSchema),
  applicants: z.array(SelectSchema),
});

type TaskSchemaType = z.infer<typeof TaskSchema>;

export { TaskSchema, type TaskSchemaType };
