package ru.nsu.fit.bachelors.dashboard.facade

import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.dto.auth.request.LoginRequest
import ru.nsu.fit.bachelors.dashboard.exception.InvalidCredentialsException
import ru.nsu.fit.bachelors.dashboard.filter.EmployeeInternalFilter
import ru.nsu.fit.bachelors.dashboard.service.EmployeeService

@Service
class AuthenticationFacadeImpl(
    private val employeeService: EmployeeService,
    private val encoder: PasswordEncoder,
) : AuthenticationFacade {
    override fun login(request: LoginRequest) {
        val employee = employeeService.findByFilter(EmployeeInternalFilter(email = request.email)).singleOrNull()

        if (employee == null || !encoder.matches(request.password, employee.password)) {
            throw InvalidCredentialsException()
        }

        println("success login") // TODO: response auth
    }
}
