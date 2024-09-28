package ru.nsu.fit.bachelors.dashboard.dto.file.response

data class RowDto (
    private val id: Long,
    private val color: String,
    private val items: List<ItemDto>,
)
