package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.task.TaskDetailResponse
import ru.nsu.fit.bachelors.dashboard.dto.task.TasksResponse
import ru.nsu.fit.bachelors.dashboard.dto.task.request.ChangeTaskOrderRequest
import ru.nsu.fit.bachelors.dashboard.dto.task.request.TaskChangeRequest
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

    /**
     * Изменить существующую задачу.
     *
     * @param request запрос изменения задачи
     */
    fun changeTask(request: TaskChangeRequest)

    /**
     * Изменить порядок задач в одном из статусов.
     *
     * @param request заявка на изменение порядка задач
     */
    fun changeOrder(request: ChangeTaskOrderRequest)

    /**
     * Получить детальную информацию по задаче.
     */
    fun getDetail(lng: Long): TaskDetailResponse
}
