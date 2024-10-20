package ru.nsu.fit.bachelors.dashboard.converter

import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.dto.group.request.GroupCreationRequest
import ru.nsu.fit.bachelors.dashboard.dto.group.request.GroupEditingRequest
import ru.nsu.fit.bachelors.dashboard.dto.group.response.GroupDto
import ru.nsu.fit.bachelors.dashboard.dto.group.response.GroupsResponse
import ru.nsu.fit.bachelors.dashboard.entity.GroupEntity

@Component
class GroupConverter {
    fun ofRequest(request: GroupCreationRequest): GroupEntity = GroupEntity(name = request.name)

    fun update(
        request: GroupEditingRequest,
        group: GroupEntity,
    ): GroupEntity {
        request.name?.let { group.name = it }
        return group
    }

    fun toResponse(all: List<GroupEntity>): GroupsResponse =
        GroupsResponse(
            count = all.count(),
            groups = all.map { toDto(it) },
        )

    private fun toDto(entity: GroupEntity): GroupDto = GroupDto(id = entity.id!!, name = entity.name, favourite = false)
}
