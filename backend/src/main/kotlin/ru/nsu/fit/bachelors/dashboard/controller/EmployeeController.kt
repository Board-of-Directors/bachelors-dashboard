package ru.nsu.fit.bachelors.dashboard.controller

import io.swagger.v3.oas.annotations.Operation
import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
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
}
