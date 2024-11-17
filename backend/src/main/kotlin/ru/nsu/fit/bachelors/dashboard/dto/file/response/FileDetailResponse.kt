package ru.nsu.fit.bachelors.dashboard.dto.file.response

data class FileDetailResponse(
    val id: Long,
    val name: String,
    val columns: List<ColumnDto>,
    val rows: List<RowDto>,
)
