package ru.nsu.fit.bachelors.dashboard.dto.student.request

data class StudentFilter(
    val insurance: String?,
    val fullName: String?,
    val tableId: Long?,
)
