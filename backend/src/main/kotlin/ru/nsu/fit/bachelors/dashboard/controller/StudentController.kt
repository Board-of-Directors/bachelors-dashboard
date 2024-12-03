package ru.nsu.fit.bachelors.dashboard.controller

import io.swagger.v3.oas.annotations.Operation
import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import ru.nsu.fit.bachelors.dashboard.dto.student.request.StudentFilter
import ru.nsu.fit.bachelors.dashboard.facade.StudentFacade

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/student")
class StudentController(
    private val studentFacade: StudentFacade,
) {
    @Operation(description = "Получить студентов по фильтру")
    @GetMapping
    fun getByFilter(filter: StudentFilter) = studentFacade.getByFilter(filter)
}
