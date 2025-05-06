package ru.nsu.fit.bachelors.dashboard

import com.github.springtestdbunit.annotation.DatabaseSetup
import com.github.springtestdbunit.annotation.ExpectedDatabase
import com.github.springtestdbunit.assertion.DatabaseAssertionMode.NON_STRICT
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test

@DisplayName("Взаимодействие с таблицами")
@Suppress("NonAsciiCharacters")
class TableControllerTest : AbstractApplicationTest() {
    @Test
    @ExpectedDatabase("/database/table/after/created_table.xml", assertionMode = NON_STRICT)
    fun `Успешное добавление новой таблицы`() {
        okPostFile("/api/v1/file/table", "http/request/Таблица платников.xlsx", "Таблица платников.xlsx")
    }

    @Test
    @DatabaseSetup("/database/table/before/existing_table.xml")
    @ExpectedDatabase("/database/table/after/changed_table_cell.xml", assertionMode = NON_STRICT)
    fun `Успешное добавление таблицы, с заменой значения в ячейке`() {
        okPostFile("/api/v1/file/table", "http/request/Таблица платников2.xlsx", "Таблица платников.xlsx")
    }

    @Test
    @DatabaseSetup("/database/table/before/existing_table.xml")
    @ExpectedDatabase("/database/table/after/changed_table_rows.xml", assertionMode = NON_STRICT)
    fun `Успешное добавление таблицы, с измененние порядка рядов`() {
        okPostFile("/api/v1/file/table", "http/request/Таблица платников3.xlsx", "Таблица платников.xlsx")
    }
}
