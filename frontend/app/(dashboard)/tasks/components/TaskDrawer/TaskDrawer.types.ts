import { TaskResponse } from "@/api/request/task/types";
import { DrawerProps } from "@/components/common";

export interface TaskDrawerProps extends DrawerProps {
    task ?: TaskResponse
}
