package ru.nsu.fit.bachelors.dashboard.converter

import ru.nsu.fit.bachelors.dashboard.dto.file.response.FileDetailResponse
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FileDto
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FilesResponse
import ru.nsu.fit.bachelors.dashboard.entity.FileEntity

class FileConverter {
    fun toResponse(all: List<FileEntity>): FilesResponse =
        FilesResponse(
            files = all.map { toDto(it) },
        )

    private fun toDto(it: FileEntity) = FileDto(id = it.id!!, name = it.name, type = it.type.name)

    fun toDetail(fileEntity: FileEntity) = FileDetailResponse(id = fileEntity.id!!, columns = emptyList(), rows = emptyList())
}
