import { EmailFieldSchema } from "@/utils/schemas";
import { z } from "zod";

export const CreateEmployeeSchema = z.object({
  email: EmailFieldSchema,
});

export type CreateEmployeeType = z.infer<typeof CreateEmployeeSchema>;
