package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.column.request.ChangeColumnRequest
import ru.nsu.fit.bachelors.dashboard.dto.column.request.ColumnOrderRequest

interface ColumnFacade {
    /**
     * Изменить колонку.
     *
     * @param changeColumnRequest запрос на изменение колонки
     */
    fun changeColumn(changeColumnRequest: ChangeColumnRequest)

    /**
     * Поменять порядок колонок.
     *
     * @param columnOrderRequest запрос на изменение порядка колонок
     */
    fun changeOrder(columnOrderRequest: ColumnOrderRequest)
}
