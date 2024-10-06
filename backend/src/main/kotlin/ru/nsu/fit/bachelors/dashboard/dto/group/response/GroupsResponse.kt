package ru.nsu.fit.bachelors.dashboard.dto.group.response

data class GroupsResponse(
    val count: Int,
    val groups: List<GroupDto>,
)
