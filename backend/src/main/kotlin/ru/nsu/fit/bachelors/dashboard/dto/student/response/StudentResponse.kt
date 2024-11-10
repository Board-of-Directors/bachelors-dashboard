package ru.nsu.fit.bachelors.dashboard.dto.student.response

import ru.nsu.fit.bachelors.dashboard.dto.student.StudentDto

data class StudentResponse(
    val students: List<StudentDto>,
)
