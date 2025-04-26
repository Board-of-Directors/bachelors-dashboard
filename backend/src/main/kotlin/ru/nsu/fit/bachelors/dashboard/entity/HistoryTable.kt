package ru.nsu.fit.bachelors.dashboard.entity

data class HistoryTable(
    val table: List<HistoryRow>,
)

data class HistoryRow(
    val values: List<String>,
)
