package ru.nsu.fit.bachelors.dashboard.dto.file.response

data class FileDetailResponse(
    private val id: Long,
    private val columns: List<ColumnDto>,
    private val rows: List<RowDto>,
)
