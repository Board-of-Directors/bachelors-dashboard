package ru.nsu.fit.bachelors.dashboard.dto.group.request

import jakarta.validation.constraints.NotNull

data class GroupEditingRequest(
    @NotNull(message = "Идентификатор группы должен быть заполнен")
    private val id: Long,
    private val name: String?,
    private val favourite: Boolean?,
)
