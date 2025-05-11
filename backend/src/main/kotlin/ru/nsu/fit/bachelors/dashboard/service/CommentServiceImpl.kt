package ru.nsu.fit.bachelors.dashboard.service

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.entity.CommentEntity
import ru.nsu.fit.bachelors.dashboard.repository.CommentRepository

@Service
@RequiredArgsConstructor
class CommentServiceImpl(
    private val commentRepository: CommentRepository,
) : CommentService {
    /**
     * Сохранить комментарий.
     */
    override fun save(comment: CommentEntity) {
        commentRepository.save(comment)
    }
}
