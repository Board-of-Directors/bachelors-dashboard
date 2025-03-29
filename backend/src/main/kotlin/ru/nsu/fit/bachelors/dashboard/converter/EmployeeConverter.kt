package ru.nsu.fit.bachelors.dashboard.converter

import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.dto.employee.response.EmployeeResponseDto
import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity

@Component
class EmployeeConverter {
    fun toResponse(employeeEntity: EmployeeEntity): EmployeeResponseDto =
        EmployeeResponseDto(
            id = employeeEntity.id!!,
            email = employeeEntity.email,
        )
}
