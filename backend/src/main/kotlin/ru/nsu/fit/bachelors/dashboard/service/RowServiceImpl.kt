package ru.nsu.fit.bachelors.dashboard.service

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.TableRowEntity
import ru.nsu.fit.bachelors.dashboard.exception.EntityNotFoundException
import ru.nsu.fit.bachelors.dashboard.exception.EntityType
import ru.nsu.fit.bachelors.dashboard.repository.RowRepository

@Service
@RequiredArgsConstructor
class RowServiceImpl(
    private val rowRepository: RowRepository,
) : RowService {
    override fun getById(rowId: Long): TableRowEntity =
        rowRepository.findById(rowId).orElseThrow { EntityNotFoundException(EntityType.ROW, rowId) }
}
