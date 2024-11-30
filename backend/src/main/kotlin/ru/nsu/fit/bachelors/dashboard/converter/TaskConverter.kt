package ru.nsu.fit.bachelors.dashboard.converter

import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.dto.task.request.TaskCreationRequest
import ru.nsu.fit.bachelors.dashboard.entity.TaskEntity

@Component
class TaskConverter {
    fun ofRequest(request: TaskCreationRequest): TaskEntity {
        TODO("Not yet implemented")
    }
}
