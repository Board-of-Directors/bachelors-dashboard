package ru.nsu.fit.bachelors.dashboard.dto.auth.response

data class CredentialsResponse(
    val refreshToken: String,
    val accessToken: String,
)
