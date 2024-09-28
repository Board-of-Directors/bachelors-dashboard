package ru.nsu.fit.bachelors.dashboard.dto.access.response

data class GroupAccessResponse(
    private val groupId: Long,
    private val emails: List<String>,
)
