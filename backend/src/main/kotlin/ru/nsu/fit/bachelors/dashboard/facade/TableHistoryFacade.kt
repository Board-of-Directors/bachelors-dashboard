package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.history.response.ChangeHistoryResponse
import ru.nsu.fit.bachelors.dashboard.dto.history.response.TableHistoryResponse

interface TableHistoryFacade {
    /**
     * Получить изменений с группировкой по таблицам.
     */
    fun getAllByTable(): List<TableHistoryResponse>

    /**
     * Получить изменения по конкретной таблице.
     */
    fun getByTable(id: Long): List<ChangeHistoryResponse>
}
