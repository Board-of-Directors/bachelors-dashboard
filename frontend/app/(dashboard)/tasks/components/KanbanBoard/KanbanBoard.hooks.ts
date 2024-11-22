import { getAllTasks } from "@/api/request/task"
import { TaskListResponse } from "@/api/request/task/types"
import { GET_ALL_TASKS_QUERY } from "@/constants"
import { useQuery } from "@tanstack/react-query"

export const useKanbanBoard = () => {
    const { data, isLoading } = useQuery<TaskListResponse>({
        queryKey: GET_ALL_TASKS_QUERY,
        queryFn: getAllTasks
    })

    return {
        tasks: data,
        isLoading
    }
}