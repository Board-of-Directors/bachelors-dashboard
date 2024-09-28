package ru.nsu.fit.bachelors.dashboard.controller

import lombok.RequiredArgsConstructor
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.group.response.GroupDto
import ru.nsu.fit.bachelors.dashboard.dto.group.response.GroupsResponse

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/group")
class GroupController {
    @GetMapping("all")
    public fun all(): ResponseEntity<GroupsResponse> =
        ResponseEntity.ok(
            GroupsResponse(
                count = 2,
                listOf(GroupDto(1L, "Первая группа", true), GroupDto(2L, "Вторая группа", false)),
            ),
        )
}
