import { getAllTasks } from "@/api/request/task";
import { TaskListResponse } from "@/api/request/task/types";
import { GET_ALL_TASKS_QUERY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { Items } from "./KanbanBoard.types";
import { createKanbanBoard } from "./KanbanBoard.utils";

export const useKanbanBoard = () => {
  const [tasks, setTasks] = useState<Items>();
  const { data, isLoading } = useQuery<TaskListResponse[]>({
    queryKey: GET_ALL_TASKS_QUERY,
    queryFn: getAllTasks,
  });

  const columns = useMemo(() => createKanbanBoard(data), [data]);

  useEffect(() => {
    setTasks(columns);
  }, [columns]);

  return {
    isLoading,
    setTasks,
    tasks,
  };
};
