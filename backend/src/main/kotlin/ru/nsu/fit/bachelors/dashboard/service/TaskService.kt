package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.TaskEntity

interface TaskService {
    /**
     * Сохранить задачу.
     *
     * @param task задача
     */
    fun save(task: TaskEntity)
}
