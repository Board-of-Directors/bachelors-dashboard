package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.task.request.TaskCreationRequest

interface TaskFacade {
    /**
     * Создать задачу.
     *
     * @param request запрос создания задачи
     */
    fun createTask(request: TaskCreationRequest)
}
