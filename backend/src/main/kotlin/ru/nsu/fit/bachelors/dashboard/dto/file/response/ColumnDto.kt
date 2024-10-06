package ru.nsu.fit.bachelors.dashboard.dto.file.response

data class ColumnDto(
    val id: Long,
    val name: String,
    val hidden: Boolean,
    val type: String,
)
