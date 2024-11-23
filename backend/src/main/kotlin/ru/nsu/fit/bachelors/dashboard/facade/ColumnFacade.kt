package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.column.request.ChangeColumnRequest

interface ColumnFacade {
    /**
     * Изменить колонку.
     *
     * @param changeColumnRequest запрос на изменение колонки
     */
    fun changeColumn(changeColumnRequest: ChangeColumnRequest)
}
