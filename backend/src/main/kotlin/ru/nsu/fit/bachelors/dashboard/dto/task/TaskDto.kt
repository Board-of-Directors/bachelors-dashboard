package ru.nsu.fit.bachelors.dashboard.dto.task

data class TaskDto(
    val id: Long,
    val name: String,
    val employee: String,
    val tags: List<String>,
    val created: String,
    val deadline: String,
)
