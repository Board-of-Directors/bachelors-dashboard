package ru.nsu.fit.bachelors.dashboard.facade

import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.multipart.MultipartFile
import ru.nsu.fit.bachelors.dashboard.converter.FileConverter
import ru.nsu.fit.bachelors.dashboard.dto.file.request.FileOrderRequest
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FileDetailResponse
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FilesResponse
import ru.nsu.fit.bachelors.dashboard.entity.FileEntity
import ru.nsu.fit.bachelors.dashboard.entity.FileType
import ru.nsu.fit.bachelors.dashboard.entity.GroupEntity
import ru.nsu.fit.bachelors.dashboard.service.FileService
import ru.nsu.fit.bachelors.dashboard.service.GroupService
import ru.nsu.fit.bachelors.dashboard.service.UploadService
import ru.nsu.fit.bachelors.dashboard.utils.ExcelParser
import ru.nsu.fit.bachelors.dashboard.utils.enumValueOrThrow
import java.util.UUID

@Component
class FileFacadeImpl(
    private val fileService: FileService,
    private val fileConverter: FileConverter,
    private val groupService: GroupService,
    private val uploadService: UploadService,
    private val excelParser: ExcelParser,
) : FileFacade {
    override fun getByGroup(groupId: Long): FilesResponse =
        fileConverter.toResponse(
            fileService.allByGroup(groupService.get(groupId)),
        )

    override fun getByType(fileType: String): FilesResponse =
        fileConverter.toResponse(
            fileService.allByType(enumValueOrThrow(fileType)),
        )

    override fun uploadFile(file: MultipartFile): UUID = uploadService.upload(file)

    override fun uploadTable(file: MultipartFile) {
        val existingFile = fileService.findByName(file.name)
        excelParser.parse(file)
    }

    @Transactional
    override fun getDetail(fileId: Long): FileDetailResponse = fileConverter.toDetail(fileService.getById(fileId))

    @Transactional
    override fun createDocument(request: DocumentCreationRequest) {
        val group = groupService.get(request.groupId)
        val fileEntity = fileConverter.toDocument(request, group)
        fileService.save(fileEntity)
    }

    @Transactional
    override fun changeOrder(fileOrderRequest: FileOrderRequest) {
        val group = groupService.get(fileOrderRequest.groupId)
        val filesById =
            fileService
                .allByIds(fileOrderRequest.ids.map { it.id })
                .associateBy { it.id }

        fileOrderRequest.ids.mapIndexed { index, idDto ->
            filesById[idDto.id]?.let {
                it.sequenceId = index
                it.group = group
            }
        }
    }
}

private fun FileConverter.toDocument(
    request: DocumentCreationRequest,
    group: GroupEntity,
): FileEntity =
    FileEntity(
        name = request.name,
        externalId = request.externalId,
        group = group,
        sequenceId = group.files.maxBy { it.sequenceId }.sequenceId + 1,
        type = FileType.DOCUMENT,
    )
