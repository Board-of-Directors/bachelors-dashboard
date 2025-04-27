package ru.nsu.fit.bachelors.dashboard.facade

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.dto.history.response.TableHistoryResponse
import ru.nsu.fit.bachelors.dashboard.entity.TableHistoryEntity
import ru.nsu.fit.bachelors.dashboard.service.TableHistoryService

@Component
@RequiredArgsConstructor
class TableHistoryFacadeImpl(
    private val tableHistoryService: TableHistoryService,
) : TableHistoryFacade {
    /**
     * Получить изменений с группировкой по таблицам.
     */
    override fun getAllByTable(): List<TableHistoryResponse> =
        tableHistoryService
            .getAll()
            .groupBy { tableHistory -> tableHistory.table?.name!! }
            .map { toDto(it.key, it.value) }

    fun toDto(
        name: String,
        histories: List<TableHistoryEntity>,
    ): TableHistoryResponse = TableHistoryResponse(name = name, count = histories.size, lastDate = histories.maxOf { it.timestamp })
}
