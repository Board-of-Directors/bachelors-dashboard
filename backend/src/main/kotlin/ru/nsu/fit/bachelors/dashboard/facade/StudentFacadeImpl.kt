package ru.nsu.fit.bachelors.dashboard.facade

import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.converter.StudentConverter
import ru.nsu.fit.bachelors.dashboard.dto.student.request.StudentFilter
import ru.nsu.fit.bachelors.dashboard.dto.student.response.StudentProperty
import ru.nsu.fit.bachelors.dashboard.dto.student.response.StudentWithProperties
import ru.nsu.fit.bachelors.dashboard.entity.StudentEntity
import ru.nsu.fit.bachelors.dashboard.service.StudentService

@Component
class StudentFacadeImpl(
    val studentConverter: StudentConverter,
    val studentService: StudentService,
) : StudentFacade {
    override fun getByFilter(filter: StudentFilter) =
        studentConverter.toResponse(studentService.findByFilter(studentConverter.toInternal(filter)))

    override fun getByInsurance(insurance: String): StudentWithProperties? {
        val student = studentService.findByInsurance(insurance)
        return student.toDetailResponse()
    }
}

private fun StudentEntity?.toDetailResponse(): StudentWithProperties? {
    if (this == null) {
        return null
    }

    return StudentWithProperties(
        id = this.id!!,
        insurance = this.insurance,
        properties =
            this.mentions
                .flatMap { row ->
                    row.items
                }.map { item -> StudentProperty(name = item.column!!.name, value = item.value) },
    )
}
