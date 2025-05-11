package ru.nsu.fit.bachelors.dashboard.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import ru.nsu.fit.bachelors.dashboard.entity.StudentEntity
import java.util.Optional

interface StudentRepository :
    JpaRepository<StudentEntity, Long>,
    JpaSpecificationExecutor<StudentEntity> {
    fun findByInsurance(insurance: String): Optional<StudentEntity>
}
