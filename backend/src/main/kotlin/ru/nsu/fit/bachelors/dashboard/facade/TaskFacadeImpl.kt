package ru.nsu.fit.bachelors.dashboard.facade

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional
import ru.nsu.fit.bachelors.dashboard.converter.TaskConverter
import ru.nsu.fit.bachelors.dashboard.dto.task.TasksResponse
import ru.nsu.fit.bachelors.dashboard.dto.task.request.TaskChangeRequest
import ru.nsu.fit.bachelors.dashboard.dto.task.request.TaskCreationRequest
import ru.nsu.fit.bachelors.dashboard.service.TaskService
import ru.nsu.fit.bachelors.dashboard.utils.enumValueOrThrow
import ru.nsu.fit.bachelors.dashboard.utils.parseDate

@Component
@RequiredArgsConstructor
class TaskFacadeImpl(
    private val taskConverter: TaskConverter,
    private val taskService: TaskService,
) : TaskFacade {
    override fun createTask(request: TaskCreationRequest) {
        taskService.save(taskConverter.ofRequest(request))
    }

    override fun all(): List<TasksResponse> {
        return taskConverter.toResponse(taskService.getAll().groupBy { it.status })
    }

    @Transactional
    override fun changeTask(request: TaskChangeRequest) {
        val task = taskService.getById(request.id)
        request.name?.let { task.name = it }
        request.description?.let { task.description = it }
        request.status?.let { task.status = enumValueOrThrow(it) }
        request.deadline?.let { task.deadline = parseDate(it) }
    }
}
