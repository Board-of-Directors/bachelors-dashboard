package ru.nsu.fit.bachelors.dashboard.dto.task.request

import jakarta.validation.constraints.NotNull
import ru.nsu.fit.bachelors.dashboard.dto.common.IdDto

data class ChangeTaskOrderRequest(
    @NotNull(message = "Статус не может быть не заполнен")
    val status: String,
    val ids: List<IdDto>,
)
