package ru.nsu.fit.bachelors.dashboard.facade

import org.springframework.stereotype.Service
import ru.nsu.fit.bachelors.dashboard.converter.EmployeeConverter
import ru.nsu.fit.bachelors.dashboard.dto.employee.response.EmployeeResponseDto
import ru.nsu.fit.bachelors.dashboard.service.EmployeeService

@Service
class EmployeeFacadeImpl(
    private val employeeService: EmployeeService,
    private val employeeConverter: EmployeeConverter,
) : EmployeeFacade {
    override fun getAllEmployees(): List<EmployeeResponseDto> = employeeService.getAll().map { employeeConverter.toResponse(it) }
}
