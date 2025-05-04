package ru.nsu.fit.bachelors.dashboard.dto.file.request

data class TableCreationRequest(
    val name: String,
    val groupId: Long?,
    val externalId: String,
)
