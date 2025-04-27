import { SelectSchema } from "@/utils/schemas";
import { z } from "zod";

const MultiselectModalSchema = z.object({
    items: z.array(SelectSchema),
});

type MultiselectModalType = z.infer<typeof MultiselectModalSchema>;

export { MultiselectModalSchema, type MultiselectModalType };
