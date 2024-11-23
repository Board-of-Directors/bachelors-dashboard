package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.row.request.ChangeRowRequest

interface RowFacade {
    /**
     * Изменить строку таблицы.
     *
     * @param changeRowRequest запрос на изменение строки таблицы
     */
    fun changeRow(changeRowRequest: ChangeRowRequest)
}
