package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.task.TasksResponse
import ru.nsu.fit.bachelors.dashboard.dto.task.request.TaskCreationRequest

interface TaskFacade {
    /**
     * Создать задачу.
     *
     * @param request запрос создания задачи
     */
    fun createTask(request: TaskCreationRequest)

    /**
     * Получить все задачи.
     *
     * @return задачи с разбивкой по статусу
     */
    fun all(): List<TasksResponse>
}
