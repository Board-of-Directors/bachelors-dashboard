package ru.nsu.fit.bachelors.dashboard.facade

import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.converter.StudentConverter
import ru.nsu.fit.bachelors.dashboard.dto.student.request.StudentFilter
import ru.nsu.fit.bachelors.dashboard.service.StudentService

@Component
class StudentFacadeImpl(
    val studentConverter: StudentConverter,
    val studentService: StudentService,
) : StudentFacade {
    override fun getByFilter(filter: StudentFilter) =
        studentConverter.toResponse(studentService.findByFilter(studentConverter.toInternal(filter)))
}
