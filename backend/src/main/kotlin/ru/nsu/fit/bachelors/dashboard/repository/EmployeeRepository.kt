package ru.nsu.fit.bachelors.dashboard.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import ru.nsu.fit.bachelors.dashboard.entity.EmployeeEntity
import java.util.Optional

interface EmployeeRepository :
    JpaRepository<EmployeeEntity, Long>,
    JpaSpecificationExecutor<EmployeeEntity> {
    fun findByEmail(email: String): Optional<EmployeeEntity>
}
