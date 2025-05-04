package ru.nsu.fit.bachelors.dashboard

import com.github.springtestdbunit.annotation.DatabaseSetup
import com.github.springtestdbunit.annotation.ExpectedDatabase
import com.github.springtestdbunit.assertion.DatabaseAssertionMode
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import ru.nsu.fit.bachelors.dashboard.dto.common.IdDto
import ru.nsu.fit.bachelors.dashboard.dto.file.request.FileOrderRequest
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FileDetailResponse
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FileDto
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FilesResponse

@DisplayName("Взаимодействие с файлами")
@Suppress("NonAsciiCharacters")
@DatabaseSetup("/database/file/before/file_setup.xml")
class FileControllerTest : AbstractApplicationTest() {
    @Test
    fun `Получение всех файлу без группы`() {
        okGet(
            "/api/v1/file",
            FilesResponse(
                files =
                    listOf(
                        FileDto(
                            id = 1000,
                            name = "file_1",
                            externalId = "file_ext_1",
                            type = "DOCUMENT",
                        ),
                    ),
            ),
        )
    }

    @Test
    fun `Получение всех файлу по группе`() {
        okGet(
            "/api/v1/file?groupId=100",
            FilesResponse(
                files =
                    listOf(
                        FileDto(
                            id = 3000,
                            name = "file_3",
                            externalId = "file_ext_3",
                            type = "TABLE",
                        ),
                        FileDto(
                            id = 2000,
                            name = "file_2",
                            externalId = "file_ext_2",
                            type = "DOCUMENT",
                        ),
                    ),
            ),
        )
    }

    @Test
    @ExpectedDatabase("/database/file/after/added_file.xml", assertionMode = DatabaseAssertionMode.NON_STRICT)
    fun `Добавление файла в группу`() {
        okPut(
            "/api/v1/file",
            FileOrderRequest(
                groupId = 100,
                ids = listOf(IdDto(1000), IdDto(2000), IdDto(3000)),
            ),
        )
    }

    @Test
    @ExpectedDatabase("/database/file/after/removed_file.xml", assertionMode = DatabaseAssertionMode.NON_STRICT)
    fun `Удаление файла из группы`() {
        okPut(
            "/api/v1/file",
            FileOrderRequest(ids = listOf(IdDto(2000), IdDto(1000))),
        )
    }

    @Test
    fun `Успешное получение детальной информации о документе`() {
        okGet(
            "/api/v1/file/detail?fileId=1000",
            FileDetailResponse(
                id = 1000,
                name = "file_1",
                externalId = "file_ext_1",
                columns = listOf(),
                rows = listOf(),
            ),
        )
    }

    @Test
    fun `Успешное получение детальной информации о таблице`() {
        okGet(
            "/api/v1/file/detail?fileId=3000",
            FileDetailResponse(
                id = 3000,
                name = "file_3",
                externalId = "file_ext_3",
                columns = listOf(),
                rows = listOf(),
            ),
        )
    }
}
