package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.FileEntity
import ru.nsu.fit.bachelors.dashboard.entity.GroupEntity
import ru.nsu.fit.bachelors.dashboard.exception.EntityNotFoundException
import ru.nsu.fit.bachelors.dashboard.exception.EntityType
import ru.nsu.fit.bachelors.dashboard.repository.FileRepository

class FileServiceImpl(
    private val fileRepository: FileRepository,
) : FileService {
    override fun allByGroup(group: GroupEntity): List<FileEntity> = fileRepository.findAllByGroup(group)

    override fun getById(fileId: Long): FileEntity =
        fileRepository
            .findById(fileId)
            .orElseThrow { EntityNotFoundException(EntityType.FILE, fileId) }
}
