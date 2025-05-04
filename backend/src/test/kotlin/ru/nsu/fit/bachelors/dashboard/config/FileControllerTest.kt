package ru.nsu.fit.bachelors.dashboard.config

import com.github.springtestdbunit.annotation.DatabaseSetup
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import ru.nsu.fit.bachelors.dashboard.AbstractApplicationTest
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FileDto
import ru.nsu.fit.bachelors.dashboard.dto.file.response.FilesResponse

@DisplayName("Взаимодействие с файлами")
@Suppress("NonAsciiCharacters")
class FileControllerTest : AbstractApplicationTest() {
    @Test
    @DatabaseSetup("/database/file/before/file_setup.xml")
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
    @DatabaseSetup("/database/file/before/file_setup.xml")
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
}
