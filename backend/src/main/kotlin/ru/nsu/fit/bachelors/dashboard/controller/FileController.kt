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

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/file")
class FileController {
    @GetMapping
    fun byGroup(
        @RequestParam groupId: Long,
    ): ResponseEntity<FilesResponse> =
        ResponseEntity.ok(
            FilesResponse(
                files =
                    listOf(
                        FileDto(id = 1L, name = "Some first file", type = "TABLE"),
                        FileDto(id = 2L, name = "Some second file", type = "TABLE"),
                    ),
            ),
        )

    @PutMapping
    fun order(
        @RequestBody @Valid fileOrderRequest: FileOrderRequest,
    ): ResponseEntity<Void> = ResponseEntity.ok().build()

    @GetMapping("/detail")
    fun detail(
        @RequestParam fileId: Long,
    ): ResponseEntity<FileDetailResponse> =
        ResponseEntity.ok(
            FileDetailResponse(
                id = 1L,
                columns =
                    listOf(
                        ColumnDto(id = 1L, name = "ФИО", hidden = false, type = "STRING"),
                        ColumnDto(id = 2L, name = "Математика", hidden = false, type = "NUMBER"),
                        ColumnDto(id = 3L, name = "Физика", hidden = false, type = "NUMBER"),
                        ColumnDto(id = 4L, name = "Русский язык", hidden = false, type = "NUMBER"),
                        ColumnDto(id = 5L, name = "Дополнительные заслуги", hidden = true, type = "STRING"),
                    ),
                rows =
                    listOf(
                        RowDto(
                            id = 1L,
                            color = "YELLOW",
                            items =
                                listOf(
                                    ItemDto(id = 1L, columnId = 1L, value = "Третьяков Артем Александрович"),
                                    ItemDto(id = 2L, columnId = 2L, value = "99"),
                                    ItemDto(id = 3L, columnId = 3L, value = "18"),
                                    ItemDto(id = 4L, columnId = 4L, value = "76"),
                                    ItemDto(id = 5L, columnId = 5L, value = "Руки ножницы"),
                                ),
                        ),
                        RowDto(
                            id = 2L,
                            color = "WHITE",
                            items =
                                listOf(
                                    ItemDto(id = 6L, columnId = 1L, value = "Вебер Олег Владимирович"),
                                    ItemDto(id = 7L, columnId = 2L, value = "12"),
                                    ItemDto(id = 8L, columnId = 3L, value = "34"),
                                    ItemDto(id = 9L, columnId = 4L, value = "56"),
                                    ItemDto(id = 10L, columnId = 5L, value = "Анекдоты убийцы"),
                                ),
                        ),
                    ),
            ),
        )
}
