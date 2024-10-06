package ru.nsu.fit.bachelors.dashboard.dto.file.request

import jakarta.validation.constraints.NotNull
import ru.nsu.fit.bachelors.dashboard.dto.common.IdDto

data class FileOrderRequest(
    @NotNull(message = "Идентификатор группы не может быть не указан")
    val groupId: Long,
    val ids: List<IdDto>,
)
