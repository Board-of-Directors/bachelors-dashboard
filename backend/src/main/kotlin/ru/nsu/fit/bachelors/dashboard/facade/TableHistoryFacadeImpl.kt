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
            .groupBy { tableHistory -> tableHistory.table?.name!! }
            .map { toDto(it.key, it.value) }

    override fun getByTable(id: Long): List<ChangeHistoryResponse> = fileService.getById(id).changes.map { it.toChangeHistoryResponse() }

    fun toDto(
        name: String,
        histories: List<TableHistoryEntity>,
    ): TableHistoryResponse = TableHistoryResponse(name = name, count = histories.size, lastDate = histories.maxOf { it.timestamp })
}

private fun TableHistoryEntity.toChangeHistoryResponse(): ChangeHistoryResponse =
    ChangeHistoryResponse(
        currentValue = this.value,
        fromValue = this.fromValue,
        operation = this.operation.name,
        timestamp = this.timestamp.toString(),
    )
