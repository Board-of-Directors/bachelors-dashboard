package ru.nsu.fit.bachelors.dashboard.dto.comment.response

data class CommentResponseDto(
    val id: Long,
    val authorEmail: String,
    val content: String,
)
