package ru.nsu.fit.bachelors.dashboard.facade

import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.dto.comment.response.CommentResponseDto
import ru.nsu.fit.bachelors.dashboard.entity.CommentEntity
import ru.nsu.fit.bachelors.dashboard.service.StudentService

@Component
@RequiredArgsConstructor
class CommentFacadeImpl(
    private val studentService: StudentService,
) : CommentFacade {
    /**
     * Получить все комментарии, привязанные к студенту.
     */
    override fun allByStudent(studentInsurance: String): List<CommentResponseDto> {
        val comments = studentService.findByInsurance(studentInsurance)?.comments ?: listOf<CommentEntity>()
        return comments.map { it.toResponse() }
    }
}

private fun CommentEntity.toResponse(): CommentResponseDto =
    CommentResponseDto(
        id = this.id!!,
        content = this.content,
        authorEmail = this.employee.email,
    )
