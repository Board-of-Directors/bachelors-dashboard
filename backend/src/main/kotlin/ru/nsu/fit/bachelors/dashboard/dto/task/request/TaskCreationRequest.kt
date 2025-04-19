package ru.nsu.fit.bachelors.dashboard.dto.task.request

data class TaskCreationRequest(
    val name: String,
    val description: String,
    val deadline: String?,
    val employees: List<Long>? = listOf(),
)
