package ru.nsu.fit.bachelors.dashboard.dto.history.response

import java.time.Instant

data class TableHistoryResponse(
    val id: Long,
    val name: String,
    val count: Int,
    val lastDate: Instant,
)
