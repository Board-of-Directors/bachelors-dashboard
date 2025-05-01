package ru.nsu.fit.bachelors.dashboard.facade

data class DocumentCreationRequest(
    val name: String,
    val groupId: Long?,
    val externalId: String,
)
