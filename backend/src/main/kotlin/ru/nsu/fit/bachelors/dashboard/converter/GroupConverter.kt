package ru.nsu.fit.bachelors.dashboard.converter

import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.dto.group.request.GroupCreationRequest
import ru.nsu.fit.bachelors.dashboard.dto.group.request.GroupEditingRequest
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
}
