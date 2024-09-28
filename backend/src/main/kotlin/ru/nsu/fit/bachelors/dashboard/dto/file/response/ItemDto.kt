package ru.nsu.fit.bachelors.dashboard.dto.file.response

data class ItemDto(
    private val id: Long,
    private val columnId: Long,
    private val value: String,
)
