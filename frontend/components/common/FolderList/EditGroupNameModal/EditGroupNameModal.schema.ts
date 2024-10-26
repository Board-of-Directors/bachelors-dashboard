import { RequiredFieldSchema } from "@/utils/schemas";
import { z } from "zod";

const EditGroupNameModalSchema = z.object({
  name: RequiredFieldSchema,
});

type EditGroupNameModalType = z.infer<typeof EditGroupNameModalSchema>;

export { EditGroupNameModalSchema, type EditGroupNameModalType };
