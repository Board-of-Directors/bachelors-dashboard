package ru.nsu.fit.bachelors.dashboard.converter

import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.dto.file.response.ColumnDto
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FileDetailResponse
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FileDto
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FilesResponse
import ru.nsu.fit.bachelors.dashboard.dto.file.response.ItemDto
import ru.nsu.fit.bachelors.dashboard.dto.file.response.RowDto
import ru.nsu.fit.bachelors.dashboard.entity.FileEntity
import ru.nsu.fit.bachelors.dashboard.entity.TableColumnEntity
import ru.nsu.fit.bachelors.dashboard.entity.TableItemEntity
import ru.nsu.fit.bachelors.dashboard.entity.TableRowEntity

@Component
class FileConverter {
    fun toResponse(all: List<FileEntity>): FilesResponse =
        FilesResponse(
            files = all.map { toDto(it) },
        )

    private fun toDto(it: FileEntity) = FileDto(id = it.id!!, externalId = it.externalId, name = it.name, type = it.type.name)

    fun toDetail(fileEntity: FileEntity) =
        FileDetailResponse(
            id = fileEntity.id!!,
            name = fileEntity.name,
            externalId = fileEntity.externalId,
            columns = fileEntity.columns.map { toDto(it) },
            rows = fileEntity.rows.map { toDto(it) },
        )

    fun toDto(column: TableColumnEntity) =
        ColumnDto(
            id = column.id!!,
            name = column.name,
            hidden = column.hidden,
            type = column.type.name,
            width = column.width,
            sequenceId = column.sequenceId,
            isInsurance = column.isInsurance,
        )

    fun toDto(row: TableRowEntity) = RowDto(id = row.id!!, color = row.color.name, items = row.items.map { toDto(it) })

    fun toDto(item: TableItemEntity) = ItemDto(id = item.id!!, value = item.value, columnId = item.column?.id!!)
}
