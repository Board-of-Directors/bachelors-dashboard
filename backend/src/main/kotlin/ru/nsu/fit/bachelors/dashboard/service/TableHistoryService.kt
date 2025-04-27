package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.FileEntity
import ru.nsu.fit.bachelors.dashboard.entity.TableHistoryEntity

interface TableHistoryService {
    /**
     * Посчитать разницу между старой и новой версией таблицы.
     * Опубликовать изменения.
     */
    fun computeAndPublish(
        oldTable: FileEntity,
        newTable: FileEntity,
    )

    /**
     * Получить все изменения.
     */
    fun getAll(): List<TableHistoryEntity>
}
