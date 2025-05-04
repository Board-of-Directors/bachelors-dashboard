package ru.nsu.fit.bachelors.dashboard

import com.github.springtestdbunit.annotation.DatabaseSetup
import com.github.springtestdbunit.annotation.ExpectedDatabase
import com.github.springtestdbunit.assertion.DatabaseAssertionMode.NON_STRICT
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import ru.nsu.fit.bachelors.dashboard.dto.group.request.GroupCreationRequest
import ru.nsu.fit.bachelors.dashboard.dto.group.request.GroupEditingRequest
import ru.nsu.fit.bachelors.dashboard.dto.group.response.GroupDto
import ru.nsu.fit.bachelors.dashboard.dto.group.response.GroupsResponse

@DisplayName("Взаимодействие с группами файлов")
@Suppress("NonAsciiCharacters")
class GroupControllerTest : AbstractApplicationTest() {
    @Test
    @ExpectedDatabase(
        value = "/database/group/after/group_created.xml",
        assertionMode = NON_STRICT,
    )
    fun `Успешное создание группы`() {
        mockMvc
            .perform(postRequest("/api/v1/group", GroupCreationRequest(name = "some group")))
            .andExpect(MockMvcResultMatchers.status().isOk)
    }

    @Test
    @DatabaseSetup("/database/group/before/group_setup.xml")
    fun `Успешное получение групп`() {
        okGet(
            "/api/v1/group/all",
            GroupsResponse(
                count = 2,
                groups =
                    listOf(
                        GroupDto(
                            id = 100,
                            name = "some group",
                            favourite = false,
                        ),
                        GroupDto(
                            id = 200,
                            name = "some group 2",
                            favourite = false,
                        ),
                    ),
            ),
        )
    }

    @Test
    @DatabaseSetup("/database/group/before/group_setup.xml")
    @ExpectedDatabase(value = "/database/group/after/changed_setup.xml", assertionMode = NON_STRICT)
    fun `Успешное изменение группы`() {
        okPut(
            "/api/v1/group",
            GroupEditingRequest(
                id = 100,
                name = "some group changed",
                favourite = true,
            ),
        )
    }

    @Test
    @DatabaseSetup("/database/group/before/group_setup.xml")
    @ExpectedDatabase(value = "/database/common/empty.xml", assertionMode = NON_STRICT)
    fun `Успеншое удаление группы`() {
        okDelete("/api/v1/group?id=100")
        okDelete("/api/v1/group?id=200")
    }
}
