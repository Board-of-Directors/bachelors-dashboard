package ru.nsu.fit.bachelors.dashboard.dto.comment.request

data class CommentCreationRequest(
    val email: String,
    val content: String,
    val studentInsurance: String,
)
