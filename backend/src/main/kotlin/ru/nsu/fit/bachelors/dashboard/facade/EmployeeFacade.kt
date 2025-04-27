package ru.nsu.fit.bachelors.dashboard.facade

import ru.nsu.fit.bachelors.dashboard.dto.employee.request.CreateEmployeeRequest
import ru.nsu.fit.bachelors.dashboard.dto.employee.request.EmployeeSearchFilterRequest
import ru.nsu.fit.bachelors.dashboard.dto.employee.response.EmployeeResponseDto

interface EmployeeFacade {
    /**
     * Получить всех сотрудников.
     *
     * @return список всех сотрудников
     */
    fun getAllEmployees(): List<EmployeeResponseDto>

    /**
     * Создать нового сотрудника.
     *
     * @param request запрос на создание сотрудника
     */
    fun createEmployee(request: CreateEmployeeRequest)

    /**
     * Получить всех работников по фильтру.
     */
    fun findByFilter(request: EmployeeSearchFilterRequest): List<EmployeeResponseDto>

    /**
     * Удалить работника.
     */
    fun deleteEmployee(id: Long)
}
