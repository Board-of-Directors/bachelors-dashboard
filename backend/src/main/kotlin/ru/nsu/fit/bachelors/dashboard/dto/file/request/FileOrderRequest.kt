package ru.nsu.fit.bachelors.dashboard.dto.file.request

import ru.nsu.fit.bachelors.dashboard.dto.common.IdDto

data class FileOrderRequest(
    val groupId: Long?,
    val ids: List<IdDto>,
)
