package ru.nsu.fit.bachelors.dashboard

import com.github.springtestdbunit.annotation.DatabaseSetup
import com.github.springtestdbunit.annotation.ExpectedDatabase
import com.github.springtestdbunit.assertion.DatabaseAssertionMode.NON_STRICT
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import ru.nsu.fit.bachelors.dashboard.dto.common.IdDto
import ru.nsu.fit.bachelors.dashboard.dto.task.request.ChangeTaskOrderRequest
import ru.nsu.fit.bachelors.dashboard.dto.task.request.TaskChangeRequest
import ru.nsu.fit.bachelors.dashboard.dto.task.request.TaskCreationRequest

@DisplayName("Взаимодействие с задачами")
@Suppress("NonAsciiCharacters")
class TaskControllerTest : AbstractApplicationTest() {
    @Test
    @DatabaseSetup("/database/task/before/setup.xml")
    @ExpectedDatabase("/database/task/after/created.xml", assertionMode = NON_STRICT)
    fun `Успешное создание задачи`() {
        okPost(
            "/api/v1/task",
            TaskCreationRequest(
                name = "task_name",
                description = "task_description",
                deadline = "2024-12-12",
                employees = listOf(100, 200),
            ),
        )
    }

    @Test
    @DatabaseSetup("/database/task/before/change_setup.xml")
    @ExpectedDatabase("/database/task/after/changed.xml", assertionMode = NON_STRICT)
    fun `Успешное изменение задачи`() {
        okPut(
            "/api/v1/task",
            TaskChangeRequest(
                id = 100,
                name = "changed_name",
                description = "changed_description",
                status = "IN_PROGRESS",
                deadline = "2024-12-30",
            ),
        )
    }

    @Test
    @DatabaseSetup("/database/task/before/change_setup.xml")
    @ExpectedDatabase("/database/task/after/change_order.xml", assertionMode = NON_STRICT)
    fun `Успешное изменение статуса и порядка задач`() {
        okPut(
            "/api/v1/task/order",
            ChangeTaskOrderRequest(
                status = "IN_PROGRESS",
                ids = listOf(IdDto(100)),
            ),
        )
    }
}
