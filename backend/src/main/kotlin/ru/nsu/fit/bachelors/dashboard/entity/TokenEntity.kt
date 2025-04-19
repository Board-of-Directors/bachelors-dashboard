package ru.nsu.fit.bachelors.dashboard.entity

import java.time.Instant

data class TokenEntity(
    val uuid: String? = null,
    val token: String? = null,
    val expireAt: Instant? = null,
)
