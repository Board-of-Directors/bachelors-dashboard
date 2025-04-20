package ru.nsu.fit.bachelors.dashboard.entity

enum class OperationType {
    /**
     * Изменение значения.
     */
    REPLACE,

    /**
     * Добавление нового значения.
     */
    ADD,

    /**
     * Удаление старого значения.
     */
    REMOVE,
}
