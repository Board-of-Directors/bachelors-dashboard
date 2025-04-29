package ru.nsu.fit.bachelors.dashboard.controller

import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.comment.response.CommentResponseDto
import ru.nsu.fit.bachelors.dashboard.facade.CommentFacade

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/comment")
class CommentController(
    private val commentFacade: CommentFacade,
) {
    @GetMapping("by-student")
    fun getCommentsByStudent(
        @RequestParam studentInsurance: String,
    ): List<CommentResponseDto> = commentFacade.allByStudent(studentInsurance)
}
