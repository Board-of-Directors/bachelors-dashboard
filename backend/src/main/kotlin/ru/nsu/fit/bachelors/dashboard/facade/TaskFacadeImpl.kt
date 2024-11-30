package ru.nsu.fit.bachelors.dashboard.facade

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.converter.TaskConverter
import ru.nsu.fit.bachelors.dashboard.dto.task.request.TaskCreationRequest
import ru.nsu.fit.bachelors.dashboard.service.TaskService

@Component
@RequiredArgsConstructor
class TaskFacadeImpl(
    private val taskConverter: TaskConverter,
    private val taskService: TaskService,
) : TaskFacade {
    override fun createTask(request: TaskCreationRequest) {
        taskService.save(taskConverter.ofRequest(request))
    }
}
