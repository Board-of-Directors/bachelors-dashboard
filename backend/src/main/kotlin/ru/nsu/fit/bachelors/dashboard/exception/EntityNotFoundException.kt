package ru.nsu.fit.bachelors.dashboard.exception

data class EntityNotFoundException(
    val entityType: EntityType,
    val entityId: Long,
) : RuntimeException("Не найдена сущность ${entityType.readableName} с идентификатором $entityId")

enum class EntityType(
    val readableName: String,
) {
    GROUP("Группа"),
}
