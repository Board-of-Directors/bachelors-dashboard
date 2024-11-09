package ru.nsu.fit.bachelors.dashboard.dto.task

data class TasksResponse(
    val status: String,
    val count: Int,
    val tasks: List<TaskDto>,
)
