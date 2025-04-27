package ru.nsu.fit.bachelors.dashboard.facade

import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.converter.EmployeeConverter
import ru.nsu.fit.bachelors.dashboard.dto.employee.request.CreateEmployeeRequest
import ru.nsu.fit.bachelors.dashboard.dto.employee.request.EmployeeSearchFilterRequest
import ru.nsu.fit.bachelors.dashboard.dto.employee.response.EmployeeResponseDto
import ru.nsu.fit.bachelors.dashboard.filter.EmployeeInternalFilter
import ru.nsu.fit.bachelors.dashboard.service.EmployeeService
import ru.nsu.fit.bachelors.dashboard.service.NotificationService
import java.util.UUID

@Service
class EmployeeFacadeImpl(
    private val employeeService: EmployeeService,
    private val notificationService: NotificationService,
    private val encoder: PasswordEncoder,
    private val employeeConverter: EmployeeConverter,
) : EmployeeFacade {
    override fun getAllEmployees(): List<EmployeeResponseDto> = employeeService.getAll().map { employeeConverter.toResponse(it) }

    override fun createEmployee(request: CreateEmployeeRequest) {
        val rawPassword = UUID.randomUUID().toString()
        val employee = employeeConverter.toEntity(request, encoder.encode(rawPassword))
        employeeService.save(employee)

        notificationService.notifyRegistration(employee, rawPassword)
    }

    override fun findByFilter(request: EmployeeSearchFilterRequest): List<EmployeeResponseDto> =
        employeeService
            .findByFilter(EmployeeInternalFilter(email = request.email))
            .map { employeeConverter.toResponse(it) }

    override fun deleteEmployee(id: Long) {
        employeeService.deleteEmployee(id)
    }
}
