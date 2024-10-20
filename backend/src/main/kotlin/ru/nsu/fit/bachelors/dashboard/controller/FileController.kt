package ru.nsu.fit.bachelors.dashboard.controller

import jakarta.validation.Valid
import lombok.RequiredArgsConstructor
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.file.request.FileOrderRequest
import ru.nsu.fit.bachelors.dashboard.dto.file.response.*
import ru.nsu.fit.bachelors.dashboard.facade.FileFacade

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/file")
class FileController(
    private val fileFacade: FileFacade,
) {
    @GetMapping
    fun byGroup(
        @RequestParam groupId: Long,
    ): ResponseEntity<FilesResponse> = ResponseEntity.ok(fileFacade.getByGroup(groupId))

    @PutMapping
    fun order(
        @RequestBody @Valid fileOrderRequest: FileOrderRequest,
    ): ResponseEntity<Void> {
        fileFacade.changeOrder(fileOrderRequest)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/detail")
    fun detail(
        @RequestParam fileId: Long,
    ): ResponseEntity<FileDetailResponse> = ResponseEntity.ok(fileFacade.getDetail(fileId))
}
