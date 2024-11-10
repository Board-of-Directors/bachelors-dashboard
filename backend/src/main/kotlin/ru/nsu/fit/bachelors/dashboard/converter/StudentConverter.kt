package ru.nsu.fit.bachelors.dashboard.converter

import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.dto.student.StudentDto
import ru.nsu.fit.bachelors.dashboard.dto.student.request.StudentFilter
import ru.nsu.fit.bachelors.dashboard.dto.student.response.StudentResponse
import ru.nsu.fit.bachelors.dashboard.entity.StudentEntity
import ru.nsu.fit.bachelors.dashboard.filter.InternalStudentFilter

@Component
class StudentConverter {
    fun toInternal(filter: StudentFilter) = InternalStudentFilter(filter.insurance, filter.fullName)

    fun toResponse(students: List<StudentEntity>): StudentResponse = StudentResponse(students.map { toDto(it) })

    private fun toDto(student: StudentEntity) = StudentDto(student.id!!, student.insurance, student.fullName)
}
