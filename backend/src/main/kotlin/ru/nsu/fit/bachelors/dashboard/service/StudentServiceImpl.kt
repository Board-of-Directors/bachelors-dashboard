package ru.nsu.fit.bachelors.dashboard.service

import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Component
import ru.nsu.fit.bachelors.dashboard.entity.FileEntity
import ru.nsu.fit.bachelors.dashboard.entity.StudentEntity
import ru.nsu.fit.bachelors.dashboard.entity.TableItemEntity
import ru.nsu.fit.bachelors.dashboard.exception.EntityNotFoundException
import ru.nsu.fit.bachelors.dashboard.exception.EntityType
import ru.nsu.fit.bachelors.dashboard.filter.InternalStudentFilter
import ru.nsu.fit.bachelors.dashboard.repository.StudentRepository

@Component
class StudentServiceImpl(
    private val studentRepository: StudentRepository,
) : StudentService {
    override fun findByFilter(filter: InternalStudentFilter): List<StudentEntity> =
        studentRepository.findAll(filter.toSpecification(), Pageable.unpaged()).toList()

    override fun getByInsurance(insurance: String): StudentEntity =
        studentRepository
            .findByInsurance(insurance)
            .orElseThrow { EntityNotFoundException(EntityType.STUDENT, insurance) }

    override fun findByInsurance(insurance: String): StudentEntity? = studentRepository.findByInsurance(insurance).orElse(null)

    override fun saveFromTable(table: FileEntity) {
        val students =
            table.rows
                .flatMap { it.items }
                .filter { item -> item.column?.isInsurance == true }
                .map { studentInsuranceItem -> createOrUpdateStudent(studentInsuranceItem) }

        studentRepository.saveAll(students)
    }

    private fun createOrUpdateStudent(insuranceItem: TableItemEntity): StudentEntity {
        val student =
            findByInsurance(insuranceItem.value) ?: StudentEntity(
                insurance = insuranceItem.value,
                fullName = insuranceItem.value,
            )

        val savedStudent = studentRepository.save(student)

        savedStudent.addMention(insuranceItem.row!!)
        return savedStudent
    }
}
