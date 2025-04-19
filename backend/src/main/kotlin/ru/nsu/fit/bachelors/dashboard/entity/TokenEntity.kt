package ru.nsu.fit.bachelors.dashboard.entity

import java.time.Instant
import java.util.UUID

data class TokenEntity(
    val uuid: UUID,
    val token: String,
    val expireAt: Instant,
)
