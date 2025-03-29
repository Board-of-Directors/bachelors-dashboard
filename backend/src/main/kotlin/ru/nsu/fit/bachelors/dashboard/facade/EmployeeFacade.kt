package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.employee.response.EmployeeResponseDto

interface EmployeeFacade {
    /**
     * Получить всех сотрудников.
     */
    fun getAllEmployees(): List<EmployeeResponseDto>
}
