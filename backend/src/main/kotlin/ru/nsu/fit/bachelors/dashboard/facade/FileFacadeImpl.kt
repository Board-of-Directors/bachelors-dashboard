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
import ru.nsu.fit.bachelors.dashboard.service.StudentService
import ru.nsu.fit.bachelors.dashboard.service.TableHistoryService
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
    private val tableHistoryService: TableHistoryService,
    private val studentService: StudentService,
) : FileFacade {
    override fun getByGroup(groupId: Long?): FilesResponse {
        val files =
            if (groupId == null) {
                fileService.findAllWithoutGroup()
            } else {
                fileService.allByGroup(groupService.get(groupId))
            }

        return fileConverter.toResponse(all = files)
    }

    override fun getByType(fileType: String): FilesResponse =
        fileConverter.toResponse(
            fileService.allByType(enumValueOrThrow(fileType)),
        )

    override fun uploadFile(file: MultipartFile): UUID = uploadService.upload(file)

    @Transactional
    override fun uploadTable(file: MultipartFile) {
        val newTable = excelParser.parse(file)
        val existingTable = fileService.findByName(newTable.name)
        if (existingTable == null) {
            fileService.save(newTable)
            return
        }
        newTable.group = existingTable.group
        newTable.sequenceId = existingTable.sequenceId
        newTable.id = existingTable.id
        newTable.changes.addAll(existingTable.changes)
        val savedTable = fileService.save(newTable)
        tableHistoryService.computeAndPublish(existingTable, savedTable)
        studentService.saveFromTable(savedTable)
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
