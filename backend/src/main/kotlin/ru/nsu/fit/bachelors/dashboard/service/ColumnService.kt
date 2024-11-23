package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.TableColumnEntity

interface ColumnService {
    /**
     * Получить колонку по идентификатору.
     *
     * @param columnId идентификатор колонки
     * @return данная колонка
     */
    fun getById(columnId: Long): TableColumnEntity

    /**
     * Получить все колонки по идентификаторам.
     *
     * @param ids идентификаторы колонок
     * @return найденные колонки
     */
    fun allByIds(ids: List<Long>): List<TableColumnEntity>
}
