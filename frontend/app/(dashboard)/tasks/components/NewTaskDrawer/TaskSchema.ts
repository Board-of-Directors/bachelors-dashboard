import { OptionalFieldSchema, RequiredFieldSchema, SelectSchema } from "@/utils/schemas";
import { z } from "zod";

const TaskSchema = z.object({
  header: RequiredFieldSchema,
  description: RequiredFieldSchema,
  startDate: OptionalFieldSchema,
  endDate: OptionalFieldSchema,
  tags: z.array(SelectSchema).optional(),
  assignees: z.array(SelectSchema).optional(),
  applicants: z.array(SelectSchema).optional(),
});

type TaskSchemaType = z.infer<typeof TaskSchema>;

export { TaskSchema, type TaskSchemaType };
