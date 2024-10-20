package ru.nsu.fit.bachelors.dashboard.facade

import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional
import ru.nsu.fit.bachelors.dashboard.converter.FileConverter
import ru.nsu.fit.bachelors.dashboard.dto.file.request.FileOrderRequest
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FileDetailResponse
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FilesResponse
import ru.nsu.fit.bachelors.dashboard.service.FileService
import ru.nsu.fit.bachelors.dashboard.service.GroupService

@Component
class FileFacadeImpl(
    private val fileService: FileService,
    private val fileConverter: FileConverter,
    private val groupService: GroupService,
) : FileFacade {
    override fun getByGroup(groupId: Long): FilesResponse =
        fileConverter.toResponse(
            fileService.allByGroup(groupService.get(groupId)),
        )

    override fun getDetail(fileId: Long): FileDetailResponse = fileConverter.toDetail(fileService.getById(fileId))

    @Transactional
    override fun changeOrder(fileOrderRequest: FileOrderRequest) {
        val filesById =
            fileService
                .allByGroup(groupService.get(fileOrderRequest.groupId))
                .associateBy { it.id }
        fileOrderRequest.ids.mapIndexed { index, idDto -> filesById[idDto.id]?.let { it.sequenceId = index } }
    }
}
