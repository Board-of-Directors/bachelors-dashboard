package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.TaskEntity

interface TaskService {
    /**
     * Сохранить задачу.
     *
     * @param task задача
     */
    fun save(task: TaskEntity)

    /**
     * Получить все задачи.
     *
     * @return список задач
     */
    fun getAll(): List<TaskEntity>

    /**
     * Получить задачу по идентификатору.
     *
     * @param id идентификатор задачи
     * @return задача
     */
    fun getById(id: Long): TaskEntity

    /**
     * Получить все задачи по идентификаторам.
     *
     * @param ids список идентификаторов задач
     * @return список найденных задач
     */
    fun allByIds(ids: List<Long>): List<TaskEntity>
}
