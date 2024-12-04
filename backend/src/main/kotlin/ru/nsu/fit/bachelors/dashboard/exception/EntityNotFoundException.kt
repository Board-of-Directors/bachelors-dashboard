package ru.nsu.fit.bachelors.dashboard.exception

import org.springframework.http.HttpStatus

data class EntityNotFoundException(
    val entityType: EntityType,
    val entityId: Long,
) : BaseException(
        HttpStatus.NOT_FOUND,
        "Не найдена сущность ${entityType.readableName.lowercase()} с идентификатором $entityId",
    )

enum class EntityType(
    val readableName: String,
) {
    GROUP("Группа"),
    FILE("Файл"),
    COLUMN("Колонка"),
    ROW("Строка"),
    TASK("Задача"),
}
