package ru.nsu.fit.bachelors.dashboard

import com.github.springtestdbunit.annotation.DatabaseSetup
import com.github.springtestdbunit.annotation.ExpectedDatabase
import com.github.springtestdbunit.assertion.DatabaseAssertionMode.NON_STRICT
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import ru.nsu.fit.bachelors.dashboard.dto.column.request.ChangeColumnRequest
import ru.nsu.fit.bachelors.dashboard.dto.column.request.ColumnOrderRequest
import ru.nsu.fit.bachelors.dashboard.dto.common.IdDto

@DisplayName("Взаимодействие с колонками таблиц")
@Suppress("NonAsciiCharacters")
@DatabaseSetup("/database/table/before/setup.xml")
class ColumnControllerTest : AbstractApplicationTest() {
    @Test
    @ExpectedDatabase("/database/table/after/changed_column.xml", assertionMode = NON_STRICT)
    fun `Успешное изменение свойств колонки`() {
        okPut(
            "/api/v1/column/change",
            ChangeColumnRequest(
                columnId = 100,
                columnHidden = true,
                columnWidth = 1000,
            ),
        )
    }

    @Test
    @ExpectedDatabase("/database/table/after/changed_order.xml", assertionMode = NON_STRICT)
    fun `Успешное изменение порядка колонок`() {
        okPut(
            "/api/v1/column/order",
            ColumnOrderRequest(ids = listOf(IdDto(200), IdDto(100))),
        )
    }
}
