package ru.nsu.fit.bachelors.dashboard.converter

import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.dto.task.TaskDto
import ru.nsu.fit.bachelors.dashboard.dto.task.TasksResponse
import ru.nsu.fit.bachelors.dashboard.dto.task.request.TaskCreationRequest
import ru.nsu.fit.bachelors.dashboard.entity.TaskEntity
import ru.nsu.fit.bachelors.dashboard.entity.TaskStatus
import java.time.LocalDate
import java.time.ZoneOffset

@Component
class TaskConverter {
    fun ofRequest(request: TaskCreationRequest): TaskEntity =
        TaskEntity(
            name = request.name,
            description = request.description,
            deadline = LocalDate.parse(request.deadline).atStartOfDay().toInstant(ZoneOffset.UTC),
            status = TaskStatus.NOT_STARTED,
        )

    fun toResponse(taskByStatus: Map<TaskStatus, List<TaskEntity>>): List<TasksResponse> =
        taskByStatus.map { (status, tasks) ->
            TasksResponse(
                status = status.readableName,
                tasks.count(),
                tasks.map { toDto(it) },
            )
        }

    private fun toDto(taskEntity: TaskEntity): TaskDto =
        TaskDto(
            id = taskEntity.id!!,
            name = taskEntity.name,
            employee = "Stub employee",
            tags = listOf(),
            created = taskEntity.created.toString(),
            deadline = taskEntity.deadline.toString(),
        )
}
