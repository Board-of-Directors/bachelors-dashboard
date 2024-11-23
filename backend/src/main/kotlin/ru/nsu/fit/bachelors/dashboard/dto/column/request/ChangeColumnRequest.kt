package ru.nsu.fit.bachelors.dashboard.dto.column.request

data class ChangeColumnRequest(
    val columnId: Long,
    val columnWidth: Long,
    val columnHidden: Boolean,
)
