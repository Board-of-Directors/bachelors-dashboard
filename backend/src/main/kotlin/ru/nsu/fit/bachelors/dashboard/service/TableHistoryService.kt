package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.FileEntity

interface TableHistoryService {
    /**
     * Посчитать разницу между старой и новой версией таблицы.
     * Опубликовать изменения.
     */
    fun computeAndPublish(
        oldTable: FileEntity,
        newTable: FileEntity,
    )
}
