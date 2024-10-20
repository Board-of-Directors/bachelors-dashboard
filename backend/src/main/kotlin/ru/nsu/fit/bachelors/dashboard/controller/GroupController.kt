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
import ru.nsu.fit.bachelors.dashboard.dto.group.response.GroupsResponse
import ru.nsu.fit.bachelors.dashboard.facade.GroupFacade

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/group")
class GroupController(
    private val groupFacade: GroupFacade,
) {
    @GetMapping("all")
    fun all(): ResponseEntity<GroupsResponse> = ResponseEntity.ok(groupFacade.getAll())

    @PostMapping
    fun create(
        @RequestBody @Valid groupCreationRequest: GroupCreationRequest,
    ): ResponseEntity<Void> {
        groupFacade.createGroup(groupCreationRequest)
        return ResponseEntity.ok().build()
    }

    @PutMapping
    fun change(
        @RequestBody @Valid groupEditingRequest: GroupEditingRequest,
    ): ResponseEntity<Void> {
        groupFacade.editGroup(groupEditingRequest)
        return ResponseEntity.ok().build()
    }

    @DeleteMapping
    fun delete(
        @RequestParam id: Long,
    ): ResponseEntity<Void> {
        groupFacade.deleteGroup(id)
        return ResponseEntity.ok().build()
    }
}
