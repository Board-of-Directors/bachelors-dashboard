package ru.nsu.fit.bachelors.dashboard.facade

import jakarta.transaction.Transactional
import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.dto.comment.request.CommentCreationRequest
import ru.nsu.fit.bachelors.dashboard.dto.comment.response.CommentResponseDto
import ru.nsu.fit.bachelors.dashboard.entity.CommentEntity
import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity
import ru.nsu.fit.bachelors.dashboard.entity.StudentEntity
import ru.nsu.fit.bachelors.dashboard.service.CommentService
import ru.nsu.fit.bachelors.dashboard.service.EmployeeService
import ru.nsu.fit.bachelors.dashboard.service.StudentService

@Component
@Transactional
@RequiredArgsConstructor
class CommentFacadeImpl(
    private val studentService: StudentService,
    private val commentService: CommentService,
    private val employeeService: EmployeeService,
) : CommentFacade {
    /**
     * Получить все комментарии, привязанные к студенту.
     */
    override fun allByStudent(studentInsurance: String): List<CommentResponseDto> {
        val comments = studentService.findByInsurance(studentInsurance)?.comments ?: listOf<CommentEntity>()
        return comments.map { it.toResponse() }
    }

    override fun createComment(request: CommentCreationRequest) {
        commentService.save(
            request.toEntity(
                studentService.getByInsurance(request.studentInsurance),
                employeeService.getByEmail(request.email),
            ),
        )
    }
}

private fun CommentCreationRequest.toEntity(
    student: StudentEntity,
    employee: EmployeeEntity,
): CommentEntity =
    CommentEntity(
        content = this.content,
        student = student,
        employee = employee,
    )

private fun CommentEntity.toResponse(): CommentResponseDto =
    CommentResponseDto(
        id = this.id!!,
        content = this.content,
        authorEmail = this.employee.email,
    )
