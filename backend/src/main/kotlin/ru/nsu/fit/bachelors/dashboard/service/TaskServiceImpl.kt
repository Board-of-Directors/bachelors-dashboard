package ru.nsu.fit.bachelors.dashboard.service

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.TaskEntity
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
}
