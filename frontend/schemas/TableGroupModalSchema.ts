import { RequiredFieldSchema } from "@/utils/schemas";
import { z } from "zod";

const TableGroupModalSchema = z.object({
    name : RequiredFieldSchema
});

type TabelGroupModalType = z.infer<typeof TableGroupModalSchema>;

export { TableGroupModalSchema, type TabelGroupModalType };