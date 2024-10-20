package ru.nsu.fit.bachelors.dashboard.service

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.GroupEntity
import ru.nsu.fit.bachelors.dashboard.exception.EntityNotFoundException
import ru.nsu.fit.bachelors.dashboard.exception.EntityType
import ru.nsu.fit.bachelors.dashboard.repository.GroupRepository

@Service
@RequiredArgsConstructor
class GroupServiceImpl(
    private val groupRepository: GroupRepository,
) : GroupService {
    override fun save(group: GroupEntity) {
        groupRepository.save(group)
    }

    override fun delete(group: GroupEntity) {
        groupRepository.delete(group)
    }

    override fun get(id: Long): GroupEntity =
        groupRepository
            .findById(id)
            .orElseThrow { EntityNotFoundException(EntityType.GROUP, id) }

    override fun getAll(): List<GroupEntity> = groupRepository.findAll()
}
