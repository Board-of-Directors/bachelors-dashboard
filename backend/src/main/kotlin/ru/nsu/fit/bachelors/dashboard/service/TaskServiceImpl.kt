package ru.nsu.fit.bachelors.dashboard.service

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.TaskEntity
import ru.nsu.fit.bachelors.dashboard.exception.EntityNotFoundException
import ru.nsu.fit.bachelors.dashboard.exception.EntityType
import ru.nsu.fit.bachelors.dashboard.repository.TaskRepository

@Service
@RequiredArgsConstructor
class TaskServiceImpl(
    private val taskRepository: TaskRepository,
) : TaskService {
    override fun save(task: TaskEntity) {
        taskRepository.save(task)
    }

    override fun getAll(): List<TaskEntity> = taskRepository.findAll()

    override fun allByIds(ids: List<Long>): List<TaskEntity> = taskRepository.findAllById(ids)

    override fun getById(id: Long): TaskEntity =
        taskRepository
            .findById(id)
            .orElseThrow { EntityNotFoundException(EntityType.TASK, id) }
}
