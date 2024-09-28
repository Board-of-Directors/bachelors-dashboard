package ru.nsu.fit.bachelors.dashboard.dto.group.request

import jakarta.validation.constraints.NotBlank

data class GroupCreationRequest(
    @NotBlank(message = "Название группы не может отсутствовать.")
    private val name: String,
)
