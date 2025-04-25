import { RequiredFieldSchema } from "@/utils/schemas";
import { z } from "zod";

export const AuthFormSchema = z.object({
  password: RequiredFieldSchema,
  email: RequiredFieldSchema,
});

export type AuthFormSchemaType = z.infer<typeof AuthFormSchema>;
