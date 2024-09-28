package ru.nsu.fit.bachelors.dashboard.dto.file.response

data class ColumnDto(
    private val id: Long,
    private val name: String,
    private val hidden: Boolean,
    private val type: String,
)
