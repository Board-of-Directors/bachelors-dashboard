package ru.nsu.fit.bachelors.dashboard.service

import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.entity.StudentEntity
import ru.nsu.fit.bachelors.dashboard.filter.InternalStudentFilter
import ru.nsu.fit.bachelors.dashboard.repository.StudentRepository

@Component
class StudentServiceImpl(
    private val studentRepository: StudentRepository,
) : StudentService {
    override fun findByFilter(filter: InternalStudentFilter): List<StudentEntity> =
        studentRepository.findAll(filter.toSpecification(), Pageable.unpaged()).toList()
}
