package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.comment.request.CommentCreationRequest
import ru.nsu.fit.bachelors.dashboard.dto.comment.response.CommentResponseDto

interface CommentFacade {
    /**
     * Получить все комментарии, привязанные к студенту.
     */
    fun allByStudent(studentInsurance: String): List<CommentResponseDto>

    /**
     * Создать комментарий.
     */
    fun createComment(request: CommentCreationRequest)
}
