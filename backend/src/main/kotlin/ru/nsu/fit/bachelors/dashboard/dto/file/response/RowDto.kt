package ru.nsu.fit.bachelors.dashboard.dto.file.response

data class RowDto (
    val id: Long,
    val color: String,
    val items: List<ItemDto>,
)
