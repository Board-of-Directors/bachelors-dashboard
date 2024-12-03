package ru.nsu.fit.bachelors.dashboard.controller

import io.swagger.v3.oas.annotations.Operation
import jakarta.validation.Valid
import lombok.RequiredArgsConstructor
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile
import ru.nsu.fit.bachelors.dashboard.dto.file.request.FileOrderRequest
import ru.nsu.fit.bachelors.dashboard.dto.file.response.*
import ru.nsu.fit.bachelors.dashboard.facade.FileFacade

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/file")
class FileController(
    private val fileFacade: FileFacade,
) {
    @Operation(description = "Получить файлы по идентификатору группы")
    @GetMapping
    fun byGroup(
        @RequestParam groupId: Long,
    ): ResponseEntity<FilesResponse> = ResponseEntity.ok(fileFacade.getByGroup(groupId))

    @Operation(description = "Получить файлы по типу")
    @GetMapping("/type")
    fun byType(
        @RequestParam fileType: String,
    ): ResponseEntity<FilesResponse> = ResponseEntity.ok(fileFacade.getByType(fileType))

    @Operation(description = "Поменять порядок файлов")
    @PutMapping
    fun order(
        @RequestBody @Valid fileOrderRequest: FileOrderRequest,
    ): ResponseEntity<Void> {
        fileFacade.changeOrder(fileOrderRequest)
        return ResponseEntity.ok().build()
    }

    @Operation(description = "Получить детальную информацию о файле")
    @GetMapping("/detail")
    fun detail(
        @RequestParam fileId: Long,
    ): ResponseEntity<FileDetailResponse> = ResponseEntity.ok(fileFacade.getDetail(fileId))

    @Operation(description = "Загрузить новый файл")
    @PutMapping("/upload")
    fun upload(@RequestParam file: MultipartFile) = fileFacade.uploadFile(file)
}
