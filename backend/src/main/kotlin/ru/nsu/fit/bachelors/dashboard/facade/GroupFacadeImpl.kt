package ru.nsu.fit.bachelors.dashboard.facade

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.converter.GroupConverter
import ru.nsu.fit.bachelors.dashboard.dto.group.request.GroupCreationRequest
import ru.nsu.fit.bachelors.dashboard.dto.group.request.GroupEditingRequest
import ru.nsu.fit.bachelors.dashboard.service.GroupService

@Component
@RequiredArgsConstructor
class GroupFacadeImpl(
    private val groupService: GroupService,
    private val groupConverter: GroupConverter,
) : GroupFacade {
    override fun deleteGroup(id: Long) {
        val existingGroup = groupService.get(id)
        groupService.delete(existingGroup)
    }

    override fun createGroup(request: GroupCreationRequest) {
        val group = groupConverter.ofRequest(request)
        groupService.save(group)
    }

    override fun editGroup(request: GroupEditingRequest) {
        val existingGroup = groupService.get(request.id)
        groupService.save(groupConverter.update(request, existingGroup))
    }
}
