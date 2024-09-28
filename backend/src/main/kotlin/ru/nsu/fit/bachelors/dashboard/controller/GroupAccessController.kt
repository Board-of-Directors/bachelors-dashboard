package ru.nsu.fit.bachelors.dashboard.controller

import lombok.RequiredArgsConstructor
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.access.request.GroupAccessRequest
import ru.nsu.fit.bachelors.dashboard.dto.access.response.GroupAccessResponse

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/group/access")
class GroupAccessController {
    @GetMapping
    fun list(
        @RequestParam groupId: Long,
    ): ResponseEntity<GroupAccessResponse> =
        ResponseEntity.ok(
            GroupAccessResponse(
                groupId = 1L,
                emails = listOf("oleg-veber@mail.ru", "o.veber@g.nsu.ru", "tretiakovvv@gmail.com"),
            ),
        )

    @PutMapping
    fun change(
        @RequestBody accessRequest: GroupAccessRequest,
    ): ResponseEntity<Void> = ResponseEntity.ok().build()

    @DeleteMapping
    fun delete(
        @RequestBody accessRequest: GroupAccessRequest,
    ): ResponseEntity<Void> = ResponseEntity.ok().build()
}
