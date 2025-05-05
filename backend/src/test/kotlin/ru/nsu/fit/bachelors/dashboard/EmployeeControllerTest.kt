package ru.nsu.fit.bachelors.dashboard

import com.github.springtestdbunit.annotation.DatabaseSetup
import com.github.springtestdbunit.annotation.ExpectedDatabase
import com.github.springtestdbunit.assertion.DatabaseAssertionMode.NON_STRICT
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.mockito.Mockito.verify
import org.mockito.Mockito.`when`
import org.springframework.beans.factory.annotation.Autowired
import ru.nsu.fit.bachelors.dashboard.configuration.UniqueIdentifierGenerator
import ru.nsu.fit.bachelors.dashboard.dto.employee.request.CreateEmployeeRequest
import ru.nsu.fit.bachelors.dashboard.service.EmailService
import java.util.UUID

@DisplayName("Взаимодействие с работниками")
@Suppress("NonAsciiCharacters")
@DatabaseSetup("/database/employee/before/setup.xml")
class EmployeeControllerTest(
    @Autowired
    private val generator: UniqueIdentifierGenerator,
    @Autowired
    private val mailService: EmailService,
) : AbstractApplicationTest() {
    @Test
    @ExpectedDatabase(value = "/database/employee/after/created_employee.xml", assertionMode = NON_STRICT)
    fun `Успешное добавление работника`() {
        `when`(generator.generate()).thenReturn(UUID.fromString("4f0275f7-d716-4d09-8f28-bc34fa7f0b66"))
        okPost("/api/v1/employee", CreateEmployeeRequest(email = "n.konstantinov@g.nsu.ru"))
        verify(generator).generate()
        verify(mailService).send(
            "Ваш пароль 4f0275f7-d716-4d09-8f28-bc34fa7f0b66 от аккаунта с адрес электронной почты n.konstantinov@g.nsu.ru",
            email = "n.konstantinov@g.nsu.ru",
        )
    }
}
