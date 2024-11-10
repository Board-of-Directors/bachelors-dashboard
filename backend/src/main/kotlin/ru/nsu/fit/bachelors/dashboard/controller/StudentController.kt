package ru.nsu.fit.bachelors.dashboard.controller

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
    @GetMapping
    fun getByFilter(filter: StudentFilter) = studentFacade.getByFilter(filter)
}
