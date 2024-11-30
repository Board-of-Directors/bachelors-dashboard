package ru.nsu.fit.bachelors.dashboard.controller

import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.task.TasksResponse
import ru.nsu.fit.bachelors.dashboard.dto.task.request.TaskCreationRequest
import ru.nsu.fit.bachelors.dashboard.facade.TaskFacade

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/task")
class TaskController(
    private val taskFacade: TaskFacade,
) {
    @GetMapping("all")
    fun allTasks(): List<TasksResponse> = taskFacade.all()

    @PostMapping
    fun create(
        @RequestBody request: TaskCreationRequest,
    ) {
        taskFacade.createTask(request)
    }
}
