package ru.nsu.fit.bachelors.dashboard.service

import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.FileEntity
import ru.nsu.fit.bachelors.dashboard.entity.FileType
import ru.nsu.fit.bachelors.dashboard.entity.GroupEntity
import ru.nsu.fit.bachelors.dashboard.exception.EntityNotFoundException
import ru.nsu.fit.bachelors.dashboard.exception.EntityType
import ru.nsu.fit.bachelors.dashboard.repository.FileRepository

@Service
class FileServiceImpl(
    private val fileRepository: FileRepository,
) : FileService {
    override fun allByGroup(group: GroupEntity): List<FileEntity> = fileRepository.findAllByGroup(group, Sort.by("sequenceId"))

    override fun getById(fileId: Long): FileEntity =
        fileRepository
            .findById(fileId)
            .orElseThrow { EntityNotFoundException(EntityType.FILE, fileId) }

    override fun allByIds(fileIds: List<Long>): List<FileEntity> = fileRepository.findAllById(fileIds)

    override fun allByType(fileType: FileType): List<FileEntity> = fileRepository.findAllByType(fileType)

    override fun save(fileEntity: FileEntity): FileEntity = fileRepository.saveAndFlush(fileEntity)

    override fun findByName(name: String): FileEntity? = fileRepository.findByName(name)

    override fun delete(entity: FileEntity) {
        fileRepository.delete(entity)
        fileRepository.flush()
    }
}
