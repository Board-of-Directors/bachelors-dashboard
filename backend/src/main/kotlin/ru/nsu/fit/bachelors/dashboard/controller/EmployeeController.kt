package ru.nsu.fit.bachelors.dashboard.controller

import io.swagger.v3.oas.annotations.Operation
import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.employee.request.CreateEmployeeRequest
import ru.nsu.fit.bachelors.dashboard.dto.employee.request.EmployeeSearchFilterRequest
import ru.nsu.fit.bachelors.dashboard.facade.EmployeeFacade

@RequestMapping("api/v1/employee")
@RequiredArgsConstructor
@RestController
class EmployeeController(
    private val employeeFacade: EmployeeFacade,
) {
    @Operation(description = "Получить всех сотрудников")
    @GetMapping
    fun getAll() = employeeFacade.getAllEmployees()

    @Operation(description = "Получить всех сотрудников по фильтрам")
    @GetMapping("search")
    fun search(filter: EmployeeSearchFilterRequest) = employeeFacade.findByFilter(filter)

    @Operation(description = "Добавить нового сотрудника")
    @PostMapping
    fun createEmployee(
        @RequestBody request: CreateEmployeeRequest,
    ) {
        employeeFacade.createEmployee(request)
    }

    @Operation(description = "Удаление сотрудника")
    @DeleteMapping
    fun deleteEmployee(
        @RequestParam employeeId: Long,
    ) {
        employeeFacade.deleteEmployee(employeeId)
    }
}
