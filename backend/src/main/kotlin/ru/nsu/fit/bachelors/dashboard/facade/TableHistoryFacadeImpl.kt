package ru.nsu.fit.bachelors.dashboard.facade

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.dto.history.response.ChangeHistoryResponse
import ru.nsu.fit.bachelors.dashboard.dto.history.response.TableHistoryResponse
import ru.nsu.fit.bachelors.dashboard.entity.TableHistoryEntity
import ru.nsu.fit.bachelors.dashboard.service.FileService
import ru.nsu.fit.bachelors.dashboard.service.TableHistoryService

@Component
@RequiredArgsConstructor
class TableHistoryFacadeImpl(
    private val tableHistoryService: TableHistoryService,
    private val fileService: FileService,
) : TableHistoryFacade {
    /**
     * Получить изменений с группировкой по таблицам.
     */
    override fun getAllByTable(): List<TableHistoryResponse> =
        tableHistoryService
            .getAll()
            .map { tableHistory -> TableKey(tableHistory.table?.id!!, tableHistory.table?.name!!, tableHistory) }
            .groupBy { tableHistory -> tableHistory.name }
            .map { toDto(it.value) }

    override fun getByTable(id: Long): List<ChangeHistoryResponse> = fileService.getById(id).changes.map { it.toChangeHistoryResponse() }

    fun toDto(histories: List<TableKey>): TableHistoryResponse =
        TableHistoryResponse(
            id = histories.first().id,
            name = histories.first().name,
            count = histories.size,
            lastDate = histories.map { it.historyEntity }.maxOf { it.timestamp },
        )
}

private fun TableHistoryEntity.toChangeHistoryResponse(): ChangeHistoryResponse =
    ChangeHistoryResponse(
        currentValue = this.value,
        fromValue = this.fromValue,
        operation = this.operation.name,
        timestamp = this.timestamp.toString(),
    )

data class TableKey(
    val id: Long,
    val name: String,
    val historyEntity: TableHistoryEntity,
)
