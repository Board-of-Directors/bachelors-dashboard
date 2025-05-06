package ru.nsu.fit.bachelors.dashboard

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
        okPostFile("/api/v1/file/table", "http/request/Таблица платников.xlsx")
    }

    @Test
    fun `Успешное добавление таблицы, не отличающейся от существующей`() {
    }

    @Test
    fun `Успешное добавление таблицы, заменяющей существующую`() {
    }
}
