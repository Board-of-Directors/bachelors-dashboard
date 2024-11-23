package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.TableRowEntity

interface RowService {
    /**
     * Получить строку таблицы по идентификатору.
     *
     * @param rowId идентификатор строки таблицы
     * @return строка таблицы
     */
    fun getById(rowId: Long): TableRowEntity

}
