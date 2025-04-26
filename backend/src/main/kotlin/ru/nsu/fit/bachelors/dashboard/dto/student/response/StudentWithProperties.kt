package ru.nsu.fit.bachelors.dashboard.dto.student.response

data class StudentWithProperties(
    val id: Long,
    val insurance: String,
    val properties: List<StudentProperty>,
)

data class StudentProperty(
    val name: String,
    val value: String,
)
