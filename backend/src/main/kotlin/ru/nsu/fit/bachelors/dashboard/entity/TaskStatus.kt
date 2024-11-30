package ru.nsu.fit.bachelors.dashboard.entity

enum class TaskStatus(
    val readableName: String,
) {
    NOT_STARTED("Не выполнена"),
    AWAITING("Ожидает выполнения"),
    IN_PROGRESS("В процессе"),
    READY("Готово"),
}
