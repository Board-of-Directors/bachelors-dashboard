package ru.nsu.fit.bachelors.dashboard.dto.access.request

data class GroupAccessRequest(
    private val id: Long,
    private val emails: List<String>,
)
