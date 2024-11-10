package ru.nsu.fit.bachelors.dashboard.converter

import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.dto.student.request.StudentFilter
import ru.nsu.fit.bachelors.dashboard.filter.InternalStudentFilter

@Component
class StudentConverter {
    fun toInternal(filter: StudentFilter) = InternalStudentFilter(filter.insurance, filter.fullName)

}
