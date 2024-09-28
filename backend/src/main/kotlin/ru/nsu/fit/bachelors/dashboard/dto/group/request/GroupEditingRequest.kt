package ru.nsu.fit.bachelors.dashboard.dto.group.request

data class GroupEditingRequest(
    private val id: Long,
    private val name: String?,
    private val favourite: Boolean?,
)
