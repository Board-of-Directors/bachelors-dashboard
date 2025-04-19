package ru.nsu.fit.bachelors.dashboard.facade

import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.dto.auth.request.LoginRequest
import ru.nsu.fit.bachelors.dashboard.dto.auth.response.CredentialsResponse
import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity
import ru.nsu.fit.bachelors.dashboard.exception.InvalidCredentialsException
import ru.nsu.fit.bachelors.dashboard.filter.EmployeeInternalFilter
import ru.nsu.fit.bachelors.dashboard.service.EmployeeService
import ru.nsu.fit.bachelors.dashboard.service.SessionService
import ru.nsu.fit.bachelors.dashboard.service.TokenService

@Service
class AuthenticationFacadeImpl(
    private val employeeService: EmployeeService,
    private val encoder: PasswordEncoder,
    private val tokenService: TokenService,
    private val sessionService: SessionService,
) : AuthenticationFacade {
    override fun login(request: LoginRequest) {
        val employee = employeeService.findByFilter(EmployeeInternalFilter(email = request.email)).singleOrNull()

        if (employee == null || !encoder.matches(request.password, employee.password)) {
            throw InvalidCredentialsException()
        }

        toCredentialsResponse(employee)
    }

    private fun toCredentialsResponse(employee: EmployeeEntity): CredentialsResponse {
        val refreshToken = tokenService.createRefreshToken(employee)
        val sessionId = sessionService.createSession(employee, refreshToken)
    }
}
