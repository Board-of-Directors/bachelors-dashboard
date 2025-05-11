package ru.nsu.fit.bachelors.dashboard.service

import ru.nsu.fit.bachelors.dashboard.entity.CommentEntity

interface CommentService {
    /**
     * Сохранить комментарий.
     */
    fun save(comment: CommentEntity)
}
