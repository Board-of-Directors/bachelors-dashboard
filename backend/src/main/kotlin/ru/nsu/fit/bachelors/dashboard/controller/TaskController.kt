package ru.nsu.fit.bachelors.dashboard.controller

import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.task.TaskDto
import ru.nsu.fit.bachelors.dashboard.dto.task.TasksResponse
import ru.nsu.fit.bachelors.dashboard.facade.TaskFacade

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/task")
class TaskController(
    private val taskFacade: TaskFacade,
) {
    @GetMapping("all")
    fun allTasks(): List<TasksResponse> =
        listOf(
            TasksResponse(
                status = "Все хорошо",
                count = 1,
                tasks =
                    listOf(
                        TaskDto(
                            1,
                            "Позвонить Артему",
                            "oleg-veber@mail.ru",
                            tags = listOf("СРОЧНО", "МАРШРУТКА"),
                            created = "2024-01-01",
                            deadline = "2024-01-01",
                        ),
                    ),
            ),
        )
}
