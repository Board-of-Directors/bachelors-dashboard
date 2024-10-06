package ru.nsu.fit.bachelors.dashboard.dto.access.response

data class GroupAccessResponse(
    val groupId: Long,
    val emails: List<String>,
)
