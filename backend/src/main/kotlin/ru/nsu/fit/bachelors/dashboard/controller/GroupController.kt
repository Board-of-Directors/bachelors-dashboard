package ru.nsu.fit.bachelors.dashboard.controller

import jakarta.validation.Valid
import lombok.RequiredArgsConstructor
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.group.request.GroupCreationRequest
import ru.nsu.fit.bachelors.dashboard.dto.group.request.GroupEditingRequest
import ru.nsu.fit.bachelors.dashboard.dto.group.response.GroupDto
import ru.nsu.fit.bachelors.dashboard.dto.group.response.GroupsResponse

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/group")
class GroupController {
    @GetMapping("all")
    fun all(): ResponseEntity<GroupsResponse> =
        ResponseEntity.ok(
            GroupsResponse(
                count = 2,
                listOf(GroupDto(1L, "Первая группа", true), GroupDto(2L, "Вторая группа", false)),
            ),
        )

    @PostMapping
    fun create(
        @RequestBody @Valid groupCreationRequest: GroupCreationRequest,
    ): ResponseEntity<Void> = ResponseEntity.ok().build()

    @PutMapping
    fun change(
        @RequestBody @Valid groupEditingRequest: GroupEditingRequest,
    ): ResponseEntity<Void> = ResponseEntity.ok().build()

    @DeleteMapping
    fun delete(
        @RequestParam id: Long,
    ): ResponseEntity<Void> = ResponseEntity.ok().build()
}
