package ru.nsu.fit.bachelors.dashboard

import com.github.springtestdbunit.annotation.DatabaseSetup
import com.github.springtestdbunit.annotation.ExpectedDatabase
import com.github.springtestdbunit.assertion.DatabaseAssertionMode.NON_STRICT
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import ru.nsu.fit.bachelors.dashboard.dto.row.request.ChangeRowRequest

@DisplayName("Взаимодействие с рядами таблиц")
@Suppress("NonAsciiCharacters")
@DatabaseSetup("/database/table/before/setup.xml")
class RowControllerTest : AbstractApplicationTest() {
    @Test
    @ExpectedDatabase("/database/table/after/changed_row.xml", assertionMode = NON_STRICT)
    fun `Успешное изменение ряда таблицы`() {
        okPut(
            "/api/v1/row/change",
            ChangeRowRequest(
                rowId = 100,
                color = "RED",
            ),
        )
    }
}
