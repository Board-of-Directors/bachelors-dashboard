package ru.nsu.fit.bachelors.dashboard.dto.history.response

data class ChangeHistoryResponse(
    val currentValue: String,
    val fromValue: String?,
    val operation: String,
    val timestamp: String,
)
