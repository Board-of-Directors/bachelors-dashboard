import { SelectSchema } from "@/utils/schemas";
import { z } from "zod";

const ManageAccessModalSchema = z.object({
  employees: z.array(SelectSchema),
});

type ManageAccessModalType = z.infer<typeof ManageAccessModalSchema>;

export { ManageAccessModalSchema, type ManageAccessModalType };
