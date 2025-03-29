package ru.nsu.fit.bachelors.dashboard.dto.auth.request

data class LoginRequest(
    val email: String,
    val password: String,
)
