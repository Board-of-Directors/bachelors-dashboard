package ru.nsu.fit.bachelors.dashboard.dto.task.request

data class TaskChangeRequest(
    val id: Long,
    val name: String?,
    val description: String?,
    val status: String?,
    val deadline: String?,
)
