package ru.nsu.fit.bachelors.dashboard.dto.group.request

import jakarta.validation.constraints.NotNull

data class GroupEditingRequest(
    @NotNull(message = "Идентификатор группы должен быть заполнен")
    val id: Long,
    val name: String?,
    val favourite: Boolean?,
)
