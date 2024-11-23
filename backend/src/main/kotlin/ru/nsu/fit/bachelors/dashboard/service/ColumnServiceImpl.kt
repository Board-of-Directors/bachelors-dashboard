package ru.nsu.fit.bachelors.dashboard.service

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.TableColumnEntity
import ru.nsu.fit.bachelors.dashboard.exception.EntityNotFoundException
import ru.nsu.fit.bachelors.dashboard.exception.EntityType
import ru.nsu.fit.bachelors.dashboard.repository.ColumnRepository

@Service
@RequiredArgsConstructor
class ColumnServiceImpl(
    private val columnRepository: ColumnRepository,
) : ColumnService {
    override fun getById(columnId: Long): TableColumnEntity =
        columnRepository
            .findById(columnId)
            .orElseThrow { EntityNotFoundException(EntityType.COLUMN, columnId) }

    override fun allByIds(ids: List<Long>): List<TableColumnEntity> = columnRepository.findAllById(ids)
}
