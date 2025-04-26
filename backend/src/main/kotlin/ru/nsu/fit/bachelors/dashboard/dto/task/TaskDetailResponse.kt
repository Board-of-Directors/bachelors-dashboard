package ru.nsu.fit.bachelors.dashboard.dto.task

data class TaskDetailResponse(
    val id: Long,
    val name: String,
    val description: String?,
    val sequenceId: Long?,
    val status: String,
    val deadline: String,
    val created: String,
)
