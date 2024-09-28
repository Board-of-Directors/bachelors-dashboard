package ru.nsu.fit.bachelors.dashboard.dto.group.response

data class GroupsResponse(
    private val count: Int,
    private val groups: List<GroupDto>,
)
