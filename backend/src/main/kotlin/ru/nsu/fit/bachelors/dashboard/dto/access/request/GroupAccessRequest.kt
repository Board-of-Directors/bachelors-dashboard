package ru.nsu.fit.bachelors.dashboard.dto.access.request

data class GroupAccessRequest(
    val id: Long,
    val emails: List<String>,
)
