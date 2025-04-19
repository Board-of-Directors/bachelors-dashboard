package ru.nsu.fit.bachelors.dashboard.facade

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional
import ru.nsu.fit.bachelors.dashboard.dto.column.request.ChangeColumnRequest
import ru.nsu.fit.bachelors.dashboard.dto.column.request.ColumnOrderRequest
import ru.nsu.fit.bachelors.dashboard.service.ColumnService

@Component
@RequiredArgsConstructor
class ColumnFacadeImpl(
    private val columnService: ColumnService,
) : ColumnFacade {
    @Transactional
    override fun changeColumn(changeColumnRequest: ChangeColumnRequest) {
        val column = columnService.getById(changeColumnRequest.columnId)
        column.hidden = changeColumnRequest.columnHidden
        column.width = changeColumnRequest.columnWidth
    }

    @Transactional
    override fun changeOrder(columnOrderRequest: ColumnOrderRequest) {
        val filesById =
            columnService
                .allByIds(columnOrderRequest.ids.map { it.id })
                .associateBy { it.id }

        columnOrderRequest.ids.mapIndexed { index, idDto ->
            filesById[idDto.id]?.let {
                it.sequenceId = index.toLong()
            }
        }
    }
}
